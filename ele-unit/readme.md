# 2020春招名企就业
- 三端正 vue + node + mongodb 全网最佳github 项目
    感谢大家， 感谢三元老师
    三生三世桃花开  vue 前端
    vue 面试准备课程 
    vue语法  组件化  写开源项目 ？
    面试大厂的 
    三  vue 单页应用   node 写Api    后台开发 (admin)   
    整站开发  宏观视野  全栈能力   
    32.2k  vue   应用给大家

    后台。
    element-ui  后台开发框架   iview
    1. 登录
    后台是给编辑 特效 讨好 体验
    vue false true

    transition vue 的面试初期考题 
    为了方便的加特效  
    1. 不会在DOM里出现 
    2. 子元素上会有进与出  v-if v-show 结合
    3. 四个类两个场景 动态的向子元素加类名
    4. 冯 显示 隐  transition-name-enter(一帧) -> transition-name-enter-active   子元素原来的样式  transition-name-enter未进入的样式 transition-name-enter-active  设置transtion-time all 1s
    退  在 -> 不在  transition-name-leave-active


- 打通后台 与node后端



1. 用户名 密码 用node做
  后台（user_name,password 8080 vue.config.js proxy) -> node(3000)
  status api 开发经验 约定好数据接口
  {
      status： 1|0 
      message:'用户名和密码有误|500'
  }url(可以变) data(不变) response(约定)
  

2. 代码的封装
 admin 模块化 vue export default{} +import from
   main.js  es6模块化
   api require('')+module.exports  common.js

- 三个项目
  项目要上线 服务器 是怎么一个方式
  build-> dist -> express ,static
  
  ele dist/ web/
  ele-admin dist /  admin/
  express static