let request=require('request-promise');
// 引入刚npm的request-promise 记得要先安装request
// 要做异步处理时要引入async
let cheerio=require('cheerio');
let fs=require('fs');//数据存放在json文件
const main=async()=>{
    // 向url发送一个请求 然后打印输出
    let html=await request({
        url:'https://movie.douban.com/top250'
    });
    // let 
    // console.log(html);
    // 在内存中构建一个dom 在前端页面用什么最好找东西:document.
    let $=cheerio.load(html);
    // 通过dom的选择器找东西
    let movieNodes=$('#content .article .grid_view')
    .find('.item');
    console.log(movieNodes);
    let movies=[];
    for (let i=0;i<movieNodes.length;i++){
        let item=cheerio.load(movieNodes[i]);
        let titles=$('.info .hd span'); 
        // console.log(titles);
        titles=([]).map.call(titles,t=>{
            return $(t).text()
        })
  
        // console.log(titles);
        let bd=$('.info .bd');
        let info=bd.find('p').text();
        let score=bd.find('.star .rating_num').text();
        movies.push({    //利用json存放在数组
            'titles':titles,
            'info':info,
            'score':score
        })
    }
    console.log(movies);
    fs.writeFile('./output.json',JSON.stringify(movies),'utf-8',(err)=>{
        if(err)
            console.log('写入失败');
        console.log('生成json文件成功，爬取完成');
        
    });

}
main();