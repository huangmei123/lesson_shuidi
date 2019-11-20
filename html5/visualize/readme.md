- 数据可视化 股票 音乐 视频 弹幕...
- 使用requestAnimationFrame 请求运动帧 代替定时器setInterval
游戏开发中使用requestAnimationFrame 来代替 setInterval()
   function animation(){
       console.log('-----wang');
       requestAnimationFrame(function() {  //作用：限制自己调用自己的频率
       animation();  //递归算法 自己调用自己，会出现内存泄漏
       })
   }
   animation();

- canvas 是画布，绘制API
画布的默认大小：
canvas.style.width 标准的 100vw
canvas.width 设置的是html属性，不是样式的某一个属性，不接受单位只接受数值
ctx=canvas.getConText('2d');
ctx.fillStyle='red';
ctx.fillText(2,100,100);
requestAnimationFrame +clearRect()   //clearRect为擦除

- Math.random() 随机生成
