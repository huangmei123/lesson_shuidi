//咖啡和茶的基类

function Beverage(){
  
}

Beverage.prototype.boilWater=function(){
   console.log('把水煮沸');
}
Beverage.prototype.brew=function(){  //抽象方法 不能直接被调用
    //空着
}
Beverage.prototype.pourIncup=function(){}
Beverage.prototype.addCondiments =function(){}
Beverage.prototype.make=function(){
    this.boilWater();
    this.brew();
    this.pourIncup();
    this.addCondiments();

}
var Coffee=function(){}
//继承Beverage
Coffee.prototype=new Beverage();//原型对象
Coffee.prototype.brew=function(){
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pourIncup=function(){
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.addCondiments=function(){
    console.log('加糖和牛奶');
}

var coffee=new Coffee();
coffee.make();
