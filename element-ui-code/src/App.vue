<template>
  <div id="app">
    <!-- <el-button 
    round
    plain 
    type="success"
    >按钮</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 容器式组件 -->
    <!-- <div>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
    </div> -->

    <!-- ElBadge -->
    <el-badge :value="12" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="199" :max="99" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge value="hot" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge type="success" :value="58" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <!-- html风格 -->
    <el-badge is-dot class="item">数据查询</el-badge>
    <el-badge is-dot :hidden="isHideDot" class="item">数据查询</el-badge>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ElButton from './components/ElButton'
import ElButtonGroup from './components/ElButtonGroup'
import ElBadge from './components/ElBadge'
export default {
  name: 'App',
  data(){
    return{
      isHideDot:false
    }
  },
  components: {
    ElButton,
    ElButtonGroup,
    ElBadge
    // HelloWorld
  },
  methods:{
    upload(evt){
      console.log(evt)
    }
  },
  mounted(){
    setTimeout(()=>{
      this.isHideDot =true
    },3000)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.item{
  margin-right: 20px;
}
</style>
