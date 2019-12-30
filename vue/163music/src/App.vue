<template>
  <div id="app">
    <div class="user">
      <!-- ****点击事件 v-on=@click-->
      <div class="back" @click="back">
        <!-- 放图标 图标库 -->
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="switches-wrapper">
      <!-- 表示想要提供一个switche功能给页面 @switch="switchItem"为一个自定义事件-->
      <switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem" />
    </div>
    </div>
    
  </div>
</template>
<script>
import Switches from './components/switches/switches';
// 模块输出
export default {
  data() {
    return {
      currentIndex:0,
      switches:[
        {
          name:'我的收藏'
        },
        {
          name:'最近播放'
        },
      ]
    }
  },
  methods:{
    back(){
    console.log('回上一页');
  },
  switchItem(index){
    this.currentIndex=index;
  }
  },
  // 自定义组件由Switches类提供
  components:{
    'switches':Switches
  }
}
</script>
<style lang="stylus">
// $color-background
@import "./common/styl/reset";
@import "./common/styl/variable";
@font-face {
  font-family: 'FontAwesome';
  src: url('./common/font-awesome/fonts/fontawesome-webfont.eot');
  src: url('./common/font-awesome/fonts/fontawesome-webfont.eot?#iefix') format('embedded-opentype'),
    url('./common/font-awesome/fonts/fontawesome-webfont.woff2') format('woff2'),
    url('./common/font-awesome/fonts/fontawesome-webfont.woff') format('woff'),
    url('./common/font-awesome/fonts/fontawesome-webfont.ttf') format('truetype'),
    url('./common/font-awesome/fonts/fontawesome-webfont.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}

.fa
  display inline-block
  // 14字体大小 /1行高
  font normal normal normal 14px/1 FontAwesome
  font-size inherit
  text-rendering auto 
  -webkit-font-smoothing antialiased

.user
  position fixed
  top 0
  bottom 0 
  left 0
  right 0 
  z-index 100
  // $color-background为一个变量 可以共用，一般放置在公共的地方
  //在@import "./common/styl/variable"里设置
  background $color-background
  .back
    position absolute
    top 0
    left 4px
    // &.引用上一级类名
    .fa-angle-left
      padding 5px 10px
      font-size 30px
      color #d1d1d1
      
      &:before 
        // 只要有内容就能成为伪元素
        content "\F104"
  .switches-wrapper
    display flex
    align-items center
    background green
    height 44px
</style>
