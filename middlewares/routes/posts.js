const Router =require('koa-router');
const router =new Router({
    prefix:'/posts'
});

const auth =require('../middleware/auth.js')

// let isLogged = false;
// const auth = (ctx,next) =>{
//     if(!isLogged) {
//         ctx.redirect('./login');
//     }else{
//         next();
//     }
  
// }

router.get('/',async(ctx) =>{
    ctx.body='文章列表'
})

//先check一下 是否登录
// post 中间件  可以单独交给一个中间件去在做
//auth是一个中间件
router.post('/', auth,async(ctx) =>{
    // ctx.redirect('./login');
    ctx.body='保存成功'
})
module.exports=router