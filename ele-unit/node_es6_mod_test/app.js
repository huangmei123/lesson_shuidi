// const express = require('express');//es5支持的common.js
import express from 'express';//es6模块化
const app = express();//部分支持es6
// app.use()
app.listen("1234", () => {
  console.log('api 服务器上线了');
})