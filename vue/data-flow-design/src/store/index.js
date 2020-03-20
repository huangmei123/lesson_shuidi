import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //rootState
    login:false,//是否登录
    userInfo:null,//用户详情 头像昵称
    products:{},
    cartList:[]//购物车数据列表

    //下单页面 发表评论 vue-router
    // user,
    // cart,
    // products,
  },
  mutations: {
  },
  actions: {
  }
  
})
