订阅 发布者模式
- 事件监听 执行逻辑？
  浏览器 chro
  me.exe 启动一个进程
  js（一个数组语言） 是chrome里的语言编译器来执行的
  html +css 由浏览器解析形成DOM树 树的数据结构
  js执行作为脚本 会立马执行 
  事件是异步的 
  - 注册事件 `micro event` 回调函数
  - 事件发生时是怎么实行的？
  js的单线程语言 onload
  轮循注册事件的地方

订阅 发布者模式
房 楼房 发布者（发布有房卖的信息）
买房者 订阅者
建模

- listen 监听 可以添加订阅者
saleOffice.clientList.push(fn);形成订阅关系
- saleOffice作为发布者
  trigger有事通知
  把所有的订阅者都执行一次
- apply函数除运行外，指定其this指向 arguments

- document.body.addEventListener('click',fn);
  发布者 `document.body` 有订阅者
  订阅者 `fn`
  document.body.events=[]----->事件池
  click 点击后去trigger一下
  trigger
    event.each(fn);