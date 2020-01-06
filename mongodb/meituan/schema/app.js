// 数据库驱动
// Schema定义数据的结构范式
const mongoose =require('mongoose'),Schema=mongoose.Schema;
// 数据结构
const articleSchema=new Schema({
    title:String,
    date:Date,
    content:String,

});
const linksSchema=new Schema({
    name:String,
    href:String,
    newPage:Boolean
});
const userSchema=new Schema({
    name:String,
    password:String,
    email:String,
    emailCode:String,
    createdTime:Number,
    articles: [articleSchema],
    links:[linksSchema]

})

//对数据库物理 对象抽象 ORm
//操作数据库更容易
const User= mongoose.model('User',userSchema);
// 最耗性能的 IO开销
// 做数据库的连接 
// 
mongoose.connect('mongodb://192.168.31.128:27017/test');

let db=mongoose.connection;
db.on('error',function(){
    console.log('数据库连接失败');
})
//once 只启动一次
db.once('open',function(){
    console.log('db openen');
});

//model MVC开发的model层
// new User({
//     name:'莓莓莓',
//     password:'111111',
//     email:'1593702111@qq.com',
//     emailCode:'123456',
//     createdTime:Date.now(),
//     articles:[]
// }).save(function(err) {
    
// });

// User.findOne({ name:'莓莓莓'},function(err,doc){
//      if(err){
//          return console.log(err);
//      }
//      console.log(doc);
// });

// User.findOne({name:'莓莓莓'},function(err,doc){
//     if(doc){
//         const article={
//             title:'小黄书',
//             date:new Date(),
//             connect:'一本好书'
//         };
//         //doc为查询出的文档
//         doc.articles.push(article);
//         doc.save(function(err){
//             if(err) return console.log(err)
//             console.log('OK');
//         })
//     }

// })
User.findOne({name:'莓莓莓'},function(err,doc){
    if(err){
        return console.log(err);
    }else if(doc){
        const link={
            name:'百度',
            href:'www.baidu.com',
            newPage:true
        }
        doc.links=[];
        doc.links.push(link);
        doc.save(function(err){
            if(err) return console.log(err);
            console.log('Ok',doc);
        })
    }
})