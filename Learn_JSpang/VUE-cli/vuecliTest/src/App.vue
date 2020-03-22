<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <div>
        <button @click="goback">后退</button>
        <button @click="gogo">前进</button>
        <button @click="gohome">返回首页</button>
      </div>
    <router-link to="/">首页</router-link>
    <router-link to="/params/198/jspang is good">params</router-link>
    <router-link to="/gohome">gohome</router-link>
    <router-link to="/jspang">jspang</router-link>
    <!-- <router-link to="/hi">Hi首页</router-link>
    <router-link :to="{name:'hi1',params:{username:'jspang'}}">Hi1首页</router-link>
    <router-link to="/hi/hi2">Hi2首页</router-link> -->
    </div>
    <p> {{$route.name}}</p>
    <transition name="fade" mode="out-in">
   <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goback(){
      this.$router.go(-1);
    },
    gogo(){
      this.$router.go(1);
    },
    gohome(){
      this.$router.push('/');
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: 1;
}
.fade-leave{
  transition: opacity 1s;
}
.fade-leave-action{
  opacity: 0;
  transition: opacity 1s;
}
</style>
