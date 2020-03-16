import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//数据管理 node->api->vuex
// 不再有组件私有 所有由中央来调配
//经纬度贡享
export default new Vuex.Store({
  state: {
    latitude:115.427461,
    longitude:25.960741
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
