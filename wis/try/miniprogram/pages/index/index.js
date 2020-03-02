Page({
  http() {
    //要去另外的网站拿数据
    //上云把 计算能力强 构建了一个前端和后端合作的感觉
    wx.cloud.callFunction({
      name: 'http'
    })
      //从云下来 
      .then(res => {
        console.log(res);
      })
  }
})