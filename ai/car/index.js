//fileSystem node的内置模块(文件模块) 有打理文件的功能
const fs =require('fs');
//AipImageClassityClient图片分类客户端
//引入包 识别图片
const AipImageClassityClient=require("baidu-aip-sdk").imageClassify;
//console.log('hello node');
//base64为图片模式 把一张图片字符串化 ,更好的传到云端处理
//Sync等待加载文件完 就不需要function（）。此过程为异步
const image =fs.readFileSync('car.jpg').toString("base64");
//console.log(image);
//实例化
const client=new AipImageClassityClient("17711766","pbqMyOWMI3ia6i2lAT2k1oGC","LccrRG7PXxEujkTEhhwoolLmmExxQcr7");
client
 .carDetect(image)
 .then(function(result){
     console.log(result)
 })

//AipImageClassityClient
//此时function()为回调函数
//文件在磁盘 js文件在内存中运行  I/O操作：先到磁盘查找，再到内存打开，命令行中读取,此过程为异步

// fs.readFile('./textaa.txt',function(err,data){
//     if(err){
//       return console.error(err);
//     }
// console.log(data.toString());
// })