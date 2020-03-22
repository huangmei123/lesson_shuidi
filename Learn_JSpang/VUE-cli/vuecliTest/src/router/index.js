import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1' 
import Hi2 from '@/components/Hi2' 
import Params from '@/components/Params' 
import Error from '@/components/Error'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/params/:newsId/:newsTitle',
      component:Params,
      beforeEnter:(to,from,next) =>{
        console.log('准备进入'),
        console.log(to),
        console.log(from),
        next();
      }
    },{
      path:'/gohome',
      redirect:'/'
    },
    {
      path:'*',
      component:Error
    }
    // {
    //   path:'/hi',
    //   // name:'Hi',
    //   component:Hi,
    //   children:[
    //     {path:'/',name:'/Hi',component:Hi},
    //     {path:'hi1',name:'hi1',component:Hi1},
    //     {path:'hi2',name:'hi2',component:Hi2},
    //   ]
    // },
  ]
})
