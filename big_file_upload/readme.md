# 字节跳动：大文件上传和断点续传
https://juejin.im/post/5dff8a26e51d4558105420ed
文件上传是开发中的难点，大文件上传及断点续传 难点中的细节及核心技术点。
在考察es6文件对象 ajax上传 async await promise 后台文件存储、流操作等全面的全栈技能的同时提升
难度到大文件和断点续传。

大文件的上传 切片
1. js在es6文件对象file node file stream有所增强
任何文件都是二进制的 分隔blob start size offset
http请求可并发 n个切片并发上传 速度更快 改善体验

- 前端的切片，让http并发带来上传大文件的快感。
  1. file.slice 完成切片 blob类型文件切片，js二进制文件类型的 
  blob协议 在上传到服务器之前就可以提前预览。

- 服务器端
  如何将这些切片 合并成一个，并且能显示原来的图片
  stream流的概念
  可读流 可写流
  chunk都是一个二进制的流文件
  Promise.all来包装每一个chunk的写入
  start end  fse.creatWriteStream
  每个chunk写入 先创建可读流，再pipe个可写流的过程
  思路：以源文件作为文件夹的名字 在上传blobs到这个文件夹 前且每一个blob 都以文件-index的命名方式来存储

- http并发上传大文件切片