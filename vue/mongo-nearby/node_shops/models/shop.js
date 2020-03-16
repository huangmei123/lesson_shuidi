const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true//必填字段
  },
  location: {
    type:  [Number],  //经纬度[lng, lat]
    index: "2d", //建立索引
    sparse: true
  }
})

const Shop = mongoose.model('Shop', shopSchema)
module.exports = Shop