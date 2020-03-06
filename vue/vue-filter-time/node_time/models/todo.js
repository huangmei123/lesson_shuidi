const mongoose =require('mongoose')

// 数据存储（物理需求）是目的，但不着急
//模型设计 根据使用来设计
const todoSchema =mongoose.Schema({
  title:{type:String,require:true},
  addresss: String,
  content:String,
//   开始日期 结束日期的需求
  start: { type:Date, default:Date.now()},
  end: { type:Date, default:Date.now()},
  created_at:{
    type:Date, default:Date.now()
  },
  update_at:{
    type:Date, default:Date.now()
  }

})

const Todo=module.exports =mongoose.model('Todo', todoSchema)