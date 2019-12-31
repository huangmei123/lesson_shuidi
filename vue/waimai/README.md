- 组件式开发
  页面由组件构成（乐高思想） ，而非标签（传统切页面）
  Facebook由一万多个组件拼起来，复用
  components/header/header 效力于多个页面

- Object.assign({},...)来自es6
- import from 让开发模块化

- 2019/12/31
- 组件化思维 
  一方面是一个页面由好多组件构成，页面开发可以划分任务
  催生的是大面积的团队合作
  每个组件要解耦
  scoped
  #app[data-v-12121]
- Vue 禁止DOM 操作，
  ref=""
  this.$refs.
