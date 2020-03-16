const express = require('express');
const shop = express.Router();
const db = require('../db/db.js');
const Shop = require('../models/shop.js');

shop.get('/', async(req, res) => {
  Shop
  .find({
     location : { 
      $near : [ 115.427461,25.960741 ], //$   有地址反差
      $maxDistance: 0.5  //2公里之内 
    }
  }) //mongodb默认查出20条
  .limit(20).exec(function(err, shops) {
      if (err) {
        console.log(err);
      }
      res.json(shops);
      // callback(doc);
    });
})

shop.post('/', async(req, res) => {
  const gm = new Shop({
    name: '古茗（汇金）',
    location: [115.427461,25.960741]
  })
  // const  fjnz = new Shop({
  //   name: '范家农庄时尚菜',
  //   location: [115.83478,28.71884]
  // })
  
  gm
    .save((err, saved) => {
      res.json({
        status: 1,
        message: '古茗添加成功'
      })
    })
})




module.exports =  (app) => {
  app.use('/shops', shop);
}