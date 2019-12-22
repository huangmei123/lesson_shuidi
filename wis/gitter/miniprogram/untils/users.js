// 将用户模块独立
//函数执行完，返回一个实例
const signIn=(token)=>new Promise((resolve,reject)=>{
    wx.setStorageSync('token',token);
    wx.request({
        url:'https://api.github.com/user',
        data:{},
        //请求给Authorization，
        header:Object.assign({'Authorization':token},{}),
        method:'GET',
        success:function(res){
            wx.setStorage({
                key:'user',
                data:res.data
            })
            resolve(res.data);
        }
    })
})

module.exports={
    signIn
}