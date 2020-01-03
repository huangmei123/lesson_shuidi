const router=require('koa-router')();

router.get('/',async(ctx,next)=>{
    // 把模板读取到内存之中，pug进行模板的编译 
  await ctx.render('index',{title:'首页'});
});

//commonjs
module.exports=router