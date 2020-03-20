import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Goods from '../views/Goods.vue'
import GoodsDetails from '../views/GoodsDetails.vue'


// Vue.component("Goods",{
//   template:`
//     <div>Goods</div>
//   `
// })

// const Goods =() =>{
//   return `
//   <div>Goods</div>
//   `
// }

// const GoodsDetails =() =>{
//   return `
//   <div>GoodsDetails</div>
//   `
// }

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    // name: 'Home',
    component:Index,
    // redirect:'/home',
    children:[
      {
        path:'/',
        component:Home
      },
      {
        path:'/goods',
        component:Goods
      },
      {
        path:'/goodsDetails',
        // name:'goodsDetails',
        component:GoodsDetails
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 路由钩子
router.beforeEach(function(to,from,next){
  console.log('路由在变化')
  console.log(to,from)
  next()
})

export default router
