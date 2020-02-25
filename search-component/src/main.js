import Vue from 'vue'
import App from './App.vue'
import router from './router'

import iView from 'iview';//ui组件  成熟的UI框架
import 'iview/dist/styles/iview.css';

Vue.use(iView);//iview的组件全局都可以访问
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
