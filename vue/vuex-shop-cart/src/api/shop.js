//backend :3000/api/products
//假数据
const _prodects=[
  {"id":1,"title":"IPad4 Mini","price":5000,"inventory":2},
  {"id":2,"title":"HM","price":10.99,"inventory":10},
  {"id":3,"title":"zara","price":20.99,"inventory":8},
];
// :8080/
export default{
    //backend callback
    getProducts(cb){
        //模拟ajax过程
      setTimeout(() =>cb(_prodects)
      ,1000)
    //   return new Promise((resol))

    }
}