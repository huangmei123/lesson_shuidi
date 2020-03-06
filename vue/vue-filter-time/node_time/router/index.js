const express =require('express');
const router =express.Router()
const mongoose=require('mongoose');
const moment =require('moment');
//mongoose
const ObjectId=mongoose.Types.ObjectId;
const Todo =require('../models/todo');
//restful
router.post('/',(req,res) =>{
    //存时间 给日期的字符串 html表单的提交
    // console.log(req.body);//请求体里的内容
    // 创建物理存储的实例
    Todo.create(req.body,(err,todo) =>{
        if(err){
            res.json(err)
        }else{
            res.json(todo)
        }
    })//BSON 一个记录是doc

})

router.get('/:id',(req,res) => {
    const id=req.params.id;
    console.log(id);
    Todo.findOne({
        "_id":ObjectId(id)  //
    },(err,todo) => {
        // console.log(todo.start)
        // console.log(new Date(todo.start).getMonth())
        console.log(momnet(todo.start).format('MMMM Do YYYY,h:mm:ss a'))
        res.json({
            err,
            todo
        })
    })
 
})
module.exports=router