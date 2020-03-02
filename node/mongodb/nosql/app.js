// mongodb 数据库驱动  mysql
var MongoClient=require('mongodb').MongoClient;
//mongodb  连接是用mongodb：//协议来  27017是数据库的端口
//mysql 的端口是3306
var url='mongodb://192.168.31.128:27017/runoob';
MongoClient.connect(url,{
    useNewUrlParser:true
},function(err,db){
  if(err){
      throw err;  //--->抛出一个异常
  }
//   console.log('数据库已创建！');
  var dbbase=db.db("runoob")  //--->选中数据库
  //创建集合
  //查询数据库是异步？ 回调方案
//   dbbase.createCollection('hm_site',function(err,res){
//   //回调先处理错误
//   if(err){
//      throw err;
//   }
//   console.log('创建了集合');
//   db.close();  //--->数据库是异步进行的
//   })
  

//----插入数据
//  var myObj={name:"潘金莲",url:'www.runoob'};  //----->JSON object
// dbbase
// .collection("hm_site")
// .insertOne(myObj,function(err,res){
//     if(err) 
//     throw err;
//     console.log('文档插入成功');
//     db.close();
// })

dbbase.collection("hm_site")
.find({"name":"潘金莲"})
.toArray(function(err,result){
    if(err)
    throw err;
    console.log(result);
    db.close();
})
})
