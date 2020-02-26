## 手写源码

[](https://juejin.im/post/5d2d19ccf265da1b7f29b05f)

1. JS
2. ES6
3. vue/react 
- vue router 源码实现
  组件化  可复用性
  不用切换页面， 带来更快的加载感受
  首页/  ->  /search页面
    1.  url改变了 
    2. vue-router  -> routes找到search对应的 Search.component 
       render <router-view />
    - vue App.vue（根组件） vue-router 所有组件-> 打包成app.js
    - 传统的页面路由切换：  /search ->发送 http请求 -> 服务器-> controller, 数据库，
       模板view ->  返回html
    本地的  app.js 找到Search.vue 挂载到页面的router-view 很快 
    通过mounted 生命周期异步请求 

路由 + 组件  = 视图
1. 关于路由：location DOM  BOM 中对象
2. hash 是location 一部份 http[s]://www.baidu.com:8080/path?a=1#haha  变化不会带来页面的刷新
  window.location.hash 切割  path   routes 匹配组件 
3. hash + hashchange一起来做的


4. node koa/express
5. leetcode