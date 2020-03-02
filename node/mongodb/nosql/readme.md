- NOSQL
  MYSQL关系型数据库，database->table->fields
  NOSQL:不需要写sql语句
  JSON object {}  .save()存储  find({})查找例如：db.orders.find({})
    - 适合碎片化的，结构型不是良好的数据存储
  Mongondb 云开发数据库就是线上版的
   npm init -y   ----->初始化
   npm install mongodb  ----->加载mongodb

- 对比mysql和mongodb
mysql： 关系型数据库                  show databases；  use db;   tables;       SQL   

mongodb：nosql新生数据库的代表，文档型 show dbs；         use db;  collections;  js语法的面向对象api

- 连接数据库mongodb
  url  拥有mongodb://协议
- db.createCollection('site',
function(err,res){
  //err 出错
  //异步的 -->耗时的
  在js中执行的代码不会阻塞
   db.close();
})
  - 代码顺序
   1. createCollection
   2. db.close() 在外面
   此时的执行顺序：
   1. create-->去到mongodb-->create-->回来跟我说
   2. 接着往后执行db.close()

- 数据库，后端开发框架express
node,后端就是app
app.get('/',(req,res)=>res.send('hello,world！')) //通过get访问首页,请求加响应 
app.listen(3000,()=>console.log('Example app listening on port 3000!'));

