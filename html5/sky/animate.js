//-------流程式的不适合复用
// var tl=new TimelineMax({
//     repeat:-1, //一个往前 一个往后 重复运动
//     yoyo:true, //重复
//     repeatDelay:1
// })
// //运动起始点
// tl.from(['#box1,#box2'],0.3,{x:'-=50%'}); //往左移动宽度的50%
// tl.from(['#box2'],0.3,{x:'+=50%'}); 

 //-----封装代码尽量做成面向对象式
//封装成类
 var Animation=function(opts)
 {
   //els参数 
   var dur= 0.3,
   amount='50%',//运动量
   tl=new TimelineMax({
       repeat:-1,
       yoyo:true,
       tepeatDelay:1
   });
   tl
    .add(fromLeft(
       opts.leftAnimated
       )
       )
    .add(fromRight(
       opts.rightAnimated
    ))
    function fromLeft(el){
        return TweenMax.from(el,dur,{x:'-='+ amount, autoAlpha:0.2})
    }
    function fromRight(el){
        return TweenMax.from(el,dur,{x:'+='+ amount, autoAlpha:0.2})
    }

}