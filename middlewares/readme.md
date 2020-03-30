# middlewares
1. 路由守卫 beforeEach
axios拦截所有的请求  /posts/admin/api
后端 koa express http请求头 POST/posts
后端去跳转 http 304 /login 路由系统
koa跳转语法：ctx.redirect('/login') 

- node的框架都是以中间件（函数）来构成web服务 为用户访问提供服务 是node开发的核心
- 中间件是有好多个的 具有访问顺序
  洋葱一样 一层层 提前退出
  每一个用户进来访问 http://localhost:3000 ，用中间件去服务res

- 中间件的洋葱模型
一层一层理解next(除非ctx.body res json)
next表示处理完这一层 
栈数据结构  每一次请求都是一次入栈
没有碰到解决方案的时候 会回流

- 中间件怎么用 
在发文章前 check登录 ，不用写到posts/中间件中 ，而独立的放到auth健全中间件函数中，单独编写，分离到
middlewares目录
node架构就多了一个middlewares层
