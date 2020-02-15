# material_design 来自google的UI风格
苹果 拟物设计->扁平化设计
安卓(material_design)
从css风格到组件化到react入门

点击时波浪的感觉如何实现？
- material design的灵魂在于交互的创新
  按钮的波浪感，进度条的进度感
  移动端的一些细节 cursor:pointer 用的是非button组件
  user-select: none
  stylus嵌入式 ::after  :active::after(active是伪状态)

1. background-image 背景图片 一般是url引入的时代
  在移动时代 渐变是可以实现
  即生成了背景 同时又没有图片
  通过radial-gradient画了一个背景
  transition 过度效果
   10% 白 1%透明(带来了仙气)
   transform:scale(12) 12->0

- 基础组件
  waring、块级按钮、
  提供通用的、变通的、各种常见要求的(70%业务开发)，就叫组件
  css有些变化(不同的状态，primary，circle，block) 如何封装？
  组件和html的区别
  1. 把它的样式封装进去
   button 样式就是样式
   组件(组合html、css、js)成为一个组件

- ReactDOM React与DOM交互
  组件 定义了一个Button组件
  在type文字 block..有通用性的需求
  <Boyfriend/><Girlfriend>
    1. ReactDOM.render(<div><Button></Button></div>,document..)
    JSX语法
    才可以在root里面显示组件 组件要编译
    2. function Button(){
        return (
            <div></div>
        )
    }
    
