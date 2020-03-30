const Koa =require('koa');
const app = new Koa();

//中间件时怎么样的数据结构实现的？

const one = async (ctx,next) =>{
  console.log('>>one');
  next();//往后抛[]
//   console.log('>>one')
}
const two = async (ctx,next) =>{
  console.log('>>two');
  ctx.body= 'hello two'  //中断向后抛 
  //next();//往后抛[]
//   console.log('>>two')
}
const three= async (ctx,next) =>{
  console.log('>>three');
  next();//往后抛[]
//   console.log('>>three')
}
//中间件 按顺序一个个执行 并向后抛
app.use(one);
app.use(two);
app.use(three);


app.listen(3000);