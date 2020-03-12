<template>
  <div id="app">
    <div v-for="(img,index) in images " :key="index">
      <img v-lazy="img">
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      images:[
      "https://img11.360buyimg.com/pop/s1180x940_jfs/t1/103557/6/14052/88126/5e5efa66E8b8e2594/71b285b0414267a8.jpg.webp",
      "https://img10.360buyimg.com/pop/s590x470_jfs/t1/101051/40/13732/100527/5e5f2300Ec7f901af/1213e2827877ec7e.jpg.webp",
      "https://imgcps.jd.com/ling/4796325/5riF5rSB55So5YW35pS-5b-D6LSt/5oqi5Lq65rCU54iG5qy-/p-5bd8253082acdd181d02f9f7/c7af1ecb/590x470.jpg",
      "https://img12.360buyimg.com/pop/s590x470_jfs/t1/104416/39/14375/333280/5e64b55fEd2493dcb/e376b81cfd9fa761.jpg.webp",
      "https://img20.360buyimg.com/pop/s590x470_jfs/t1/104164/20/14472/95797/5e6470cbEc1bad2f1/657d6bcb34acde6d.jpg.webp"
      ]
    }
  },
  components: {
    // HelloWorld
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
</style>
