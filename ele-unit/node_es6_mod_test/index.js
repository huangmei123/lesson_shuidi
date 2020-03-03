// 唯一的入口 做唯一一次es5模块化
//挂载es6高级能力 
//yarn add @babel/cli 写的时候es6 ->babel编译成es5  require ->node就能运行
require("@babel/register");
require('./app.js');