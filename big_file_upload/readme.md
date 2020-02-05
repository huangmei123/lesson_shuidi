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
