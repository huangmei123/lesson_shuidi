import Vue from 'vue'
import Router from 'vue-router'
// 首页直接载入
import HelloWorld from '@/components/HelloWorld'
//大量的用户都不是登入进行，所以没必要在首页加载，延迟加载就是一个渐进式的，
//一般情况下 相对路径 层级有点深
//webpack alias 快速链接
const Login = ()=>import('@/components/Login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodsList',
      name: 'GoodsList',
      component: () => import('../components/GoodsList.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
