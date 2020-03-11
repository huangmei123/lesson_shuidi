// 财务处 专门进行数据管理的部门
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // 相当于组件的data
  state:{
    products:[
      {"id":1,"title":"IPad4 Mini","price":5000,"inventory":2}
    ]
  }
})
