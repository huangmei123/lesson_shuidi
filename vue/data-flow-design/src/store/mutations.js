//围绕状态 设计改变
// user cartList products
//login true false
import{
    RECORD_USERINFO,
    ADD_CART,
    INCREMENT_QUANTITY,
    CHECKOUT
} from './mutation-types'
export default{
    // 注册用户信息的函数
    //login {avatar:''. username:''}
    [RECORD_USERINFO](){
    state.userInfo=info;
    state.login =true
  },
  //购物车 cartList 
  [ADD_CART](state,{productId}){
    
  },
  [INCREMENT_QUANTITY](state){

  },
  [CHECKOUT](){

  }
}