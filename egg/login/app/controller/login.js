const Controller =require('egg').Controller;

class LoginController extends Controller{
 async register(){
   //异步 存一条数据
   const {ctx}=this;  //黑盒子
   const {password,username,email}=ctx.request.body;
   // service数据存储业务
 
//    ctx.body='hi,egg';
//分层 
   await 
   ctx.service.user.register({password,username,email});
  }
  async loginIn(){
      const {ctx}=this;
     
      //用户名和密码 ctx =req + res
     // console.log(ctx.request.body);
      //每一次请求都有请求头和请求体
      const{email,password }=ctx.request.body
      console.log(email,password);
      ctx.body='登录成功！'
  }
}
module.exports=LoginController;