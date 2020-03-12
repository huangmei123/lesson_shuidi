import Vue from 'vue'
import App from './App.vue'

//两个性能优化 loayload click
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload,{

  //require图片通过js代码引入进来 webpack静态资源打包器
  error:require('./assets/item-detail-1.jpg'),//error
  loading:require('./assets/item-detail-1.jpg'),//加载中
  attempt:1//viewport
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
