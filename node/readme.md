# 深入理解Node.js中的进程和线程

- 前端的角度 来看待进程与线程
- node进程 子进程 cluster 多核CPU的利用 GO
- 线上node运行进程管理
- docker容器化时代
- k8s

1. 从前端角度开始
  - node.js是单线程吗? 不是 js是运行在服务器端
  js是单线程 ，但是JS宿主浏览器（容器），多进程（http并发img，css html js ）， 多线程
  注册在主线程 event事件里，
  线程之间可以相互通信，
  html css js .vue .jsx
  java 有主线程 同时开辟新的线程的概念
  json是基于事件机制event 再加上回调loop，从另一个角度解决了能力问题
  ajax 是由微软公司发明的一个对象
    - 是由新的线程创建出来的
  
2. node 当前main.js 进程 process pid
  服务器端天生就是多线程的，分布式的 (前端、后端、数据库代码)
  js 在服务器端执行 单线程的
  node是我服务器端js执行的容器，node是多进程的
