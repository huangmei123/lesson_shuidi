'use strict';
//-----路由
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
 // 网站 多个模块 /register？(url)只连接一个资源 /login/register
 //注册 req res (controller为控制器层)
  router.post('/login/register',controller.login.register );
  //登录 post请求 login登录
  router.post('/login',controller.login.loginIn)
};
