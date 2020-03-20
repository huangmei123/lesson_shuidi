// 为什么选择mongose：包容前期的设计冗余，动态调整数据
var mongoose=require ('mongoose')


const userSchema= new mongoose.Schema({
    "userId":String,//生成唯一ide用户Id
    "name":String,
    "avatar":String,
    "userName":String,
    "userPwd":String,
    //杂糅
    "cartList":[
        {
            productId:String,
            productImg:String,
            productName:String,
            checked:String,
            productNum:Number,
            productPrice:Number
        }
    ],
    'addressList':[
        {
            "addressId":Number,
            "userName":String,
            "streetName":String,
            "tel":Number,
            "isDefault":Boolean
        }
    ]
})
module.exports =mongoose.model('User',userSchema)