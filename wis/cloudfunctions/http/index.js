// 云函数入口文件
//云sdk
const cloud = require('wx-server-sdk')
const got =require('got')
//初始化
cloud.init()

// 云函数入口函数
// async表示异步的 await
//event 出事 小程序客户端 callFunction event代表小程序 
//context是上下文
exports.main = async (event, context) => {
 let getResponse=await got('httpbin.org/get')  
//  console.log(getResponse,'++++++++');
 return {
   url:getResponse.url
 }
}