- npm init --type=simple 项目的初始化
像Java一样做后端 企业级开发框架
- npm init egg --type=simple
app目录为开发目录

- app
 node 代表应用程序的主要代码
- config 配置文件夹
- test测试目录

- egg架构
  脚手架快速构建项目结构
  web http 协议
  router.js 配置路由
  --> controller (ctx.request.body)
  ->model 

------下午
- npm i sequelize-cli -D 
 -D ？？表示代码写完上线后不需要 （来到了devDependencies）
 开发阶段的依赖 mysql的处理
 创建表 由执行sql 
 sequelize-cli command-line 命令行
 yarn global add sequelize-cli 全局安装

- sequelize 命令行集锦
  sequelize init  初始化mysql的工作目录
  - config.json
  sequelize db:create 创建一个数据库 从config.json 中读取到名字
  创建一个表： sequelize migration:create --name  create-shops-table
  