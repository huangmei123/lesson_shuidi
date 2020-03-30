//服务是通过middlewares提供的
//洋葱圈
const Koa =require('koa')
const app =new Koa();
//返回一个hello给用户
// 向用户响应hello ，web服务
// koa的web服务由中间件提供
// const sayHelloCN =async (ctx) =>{
//     ctx.body ='hello China';
// }

// const sayHello = async (ctx) =>{
//   ctx.body = 'hello ,world';
// }
// // Vue.use()
// app.use(sayHelloCN)
// app.use(sayHello)//启用一个中间件服务 
// app.listen(3000);

//用户在进入app.use的时候 到ctx.body 然后结束 ，就不会执行另一个use 。
//所以中间件是有顺序的。
//访问页面 localhost:3000
//------------------
// const bodyParser =require('koa-bodyparser');
// //这是一个发送表单的处理
// //session用户登录的中间件。。。
// app.use(bodyParser());//放在前面 是因为 内部代码 await 等到所有数据到达后 next

// app.use(async (ctx) =>{
//     // context 上下文 跳转 报错
//     //得到表单传过来的数据
//     //res向发出请求的用户返回他在请求时form里的数据
//     //没有拿到？
//     // 表单数据到达 异步的on('data')
//     ctx.body=ctx.request.body  //ctx.request req
// })


// app.listen(3000);
//-------------------------------
const bodyParser =require('koa-bodyparser');

const logger =(ctx,next) =>{
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
    next();
}

app.use(logger);
app.use(bodyParser());

//加中间件 加上一个服务
// logger 设计日志服务 req Date() req.url 

app.use(async (ctx) =>{
    ctx.body=ctx.request.body
})



app.listen(3000);