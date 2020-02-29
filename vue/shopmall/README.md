- 组件延迟加载
  性能优化 首页不需要加载n那么多的组件 返回引入组件的函数
- alias
  vue 相对地址查找的时候复杂的项目、架构 目录结构有一定的意义
  alias是来自于webpack build的配置
  @ src
  ~ src/assets
  api src/api 接口
  
- 一个大的组件不便于维护，就分成几个组件 父子组件
目录components 下构建父组件 goodsDetail。
