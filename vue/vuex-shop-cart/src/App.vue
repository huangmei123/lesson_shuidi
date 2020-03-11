<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-for="(product , index) in $store.state.products" :key="index">
    {{product.title}}
    </div>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Api from "@/api/shop.js";

export default {
  name: 'App',
  data(){
    return{
      products:[]
    }
  },
  components: {
    // HelloWorld
  },
  mounted(){
    // Api.getProducts((_products) =>{
    //   this.products=_products
    // });
  
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
