- 工作流
  script脚本区域强化我们的开发
  dev 启化我们的http服务
  styl stylus编译为css
  json-server商家的信息api在seller.json文件里
- dom api是过去式
  响应式编程
  MVVM {{}} js data:
  历史：php/java+html/css <%=message%>前端不需要了解数据后端
  js 8年前 web2.0  fecth/ajax js主动请求数据前后端分庭抗礼 DOM/api
  4年前 vue/react+node+flutter(客户端)+GO+docker 时代变成MVVM时代 连数据也要处理

- 小程序和vue是一样的
mvvm优秀的地方在于简单
- 天生集成数据驱动 data{{}} :src
- 页面数据的相应式的 数据变了，界面就会变
  
- inline-block考点
  inline 没有设值宽高的能力 但是兄弟间相安无事，不会挤掉其他的块
  block 兄弟间换行 要做两列式布局(左边一个，右边一个，一般用float)现在用inline-block
  副作用：兄弟间会产生间隙
  浏览器实现inline-block的天坑 
   1.使用换行符来解决  \n,是由font-size来决定
   父元素 font-size 0
   2.换行符首尾相连 但是会影响结构的解读性

- stylus向css提供了函数功能
  利用返回值的叫函数
  我们的目的是重复利用css代码 完成了css的模块化 -->mixin混合

- 图片 ，手机的屏幕像素不一样
@media 条件 (-webkit(浏览器前缀的选择)-min-deivice-pixel-ration:3(像素密度比))
图片的命名   ...@2x.png  ...@3x.png