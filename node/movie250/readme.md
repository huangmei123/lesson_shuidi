浏览器也叫上网代理 proxy
https://movie.douban.com/top250 返回的是一个显现网页 html render
使用postman模拟请求
response 
使用爬虫模仿postman的功能
- 发出http请求 request_promise (异步的时候使用promise)
request +promise 等到请求完之后 then 
- 分析得到的html 扣字出来
*cheerio 把html文档在内存中渲染成dom树

- 练习：
- top/250 爬取一次得到pageination，拿到a标签得到href 
urls数组
for
  request页面

page.json

通过爬虫学习豆瓣设计 爬虫和html结构结合起来

