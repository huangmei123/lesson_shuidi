- WEB 跟桌面（单机）最大区别？

localhost:1234  n 会在
  =>并发请求
  独立地分配给每个用户一个线程，这个线程会支持fs读取一个文件 index.html
  I/O 吃紧  支持300个左右的并发请求 物理设备是核心
  解决方案：多加机器，因为机器的物理设备可以并联 
  ngnix(负载均衡) 哪些机器是空闲的 把用户送到这台机器的IP地址
  如何充分的发挥每台机器的性能？每台机器有多核 
  1234这个端口对应node进程，node进程只是一个进程，没有子进程 所有只运行一个CPU
  把CPU都用
