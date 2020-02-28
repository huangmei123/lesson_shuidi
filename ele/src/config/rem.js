// // 手动的计算
// console.log('rem');
(function(doc, win){
    // -------不会勿滥外界 
    // 作用：html fontSize  动态计算->width/16->得到 栅格的能力 css等比例宽度的计算
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in win ? 'orientationchange': 'resize',
      recalc = function() {
        // 设备无差异计算出  16rem = 100% width（整个宽度的1/16）
        // 16rem=100%,这个就是动态宽度的100%。
        // 16其实就是引入了栅格系统，将一行分为16列，
        var clientWidth = docEl.clientWidth;//整个窗口的宽度
  
        if (!clientWidth) return;
        // 设计稿  750  375  640  320
        docEl.style.fontSize = 20 * clientWidth/375 + 'px';
        // console.log(clientWidth);
        // ?设备可能由纵向变模着拿 手机发生变化
        win.addEventListener(resizeEvt, recalc, false);
      };
    // 从外到内， 从内到外
    // .box   click  a()    true  由外向内执行;
    //   .innerBOX  b()    false   内层向外层执行;
    // 在vue里面也有生命周期，DOMContentLoaded事件比loaded事件先发生，
    // 因为loaded要等到所有图片都加载完，整个页面都加载完了才触发，
    // 而DOMContentLoaded事件只要DOM结构加载完了（html结构)加载完成了，就会触发。
    doc.addEventListener('DOMContentLoaded', recalc, false);
    // docEl.style.fontSize = '23.5px';
  })(document, window) // 闭包， 立即执行 实参
  