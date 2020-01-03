- Koa 是最流行的node 轻量级框架
  egg.js基于koa的二次开发
- koa new -> app ->listen
  /bin /www（没有后缀，可以服务于http Java... ）
  www文件就是网站项目的启动文件
  http.createServer(app.callback);
- 模板
  views
  koa-views()
  app.use() 启用views中间件
  模板在哪里，使用哪种模板引擎 pug
- 设置路由 分层
  routes/index.js
  koa-routes()
  .get post
  index.routes()
  app.use()
- logger 
  koa-logger use 
- 出错模块
img.bosszhipin.com/
https://www.zhipin.com/job_detail/1c491d20c1ddd7f50nZ409y6GFY~.html?ka=comp_joblist_5
静态资源 服务器端资源
img.bosszhipin.com 
dns 解析？
问本地
问网络供应商 列表 
公司会在网络供应商机房里装一些cdn机器
若网络供应商没有 就会去中央服务器里请求一次 缓存到本地
- koa-static
- 表单提交
  koa-bodyparser
  GET 请求头里 head GET url?a=1&b=2
  POST head url body.length +body 