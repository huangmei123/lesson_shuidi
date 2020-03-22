<template>
    <div>
        <h2>{{msg}}</h2>
        <p>NewsId:{{$route.params.newsId}}</p>
        <p>NewsTitle:{{$route.params.newsTitle}}</p>
    </div>
</template>
<script>
export default {
 
  data () {
    return {
      msg: 'Welcome to Params'
    }
  },
  beforeRouteEnter:(to,from,next) =>{
    console.log("进入");
    next();
  },
  beforeRouteLeave:(to,from,next) =>{
    console.log("退出");
    next();
  }
}
</script>