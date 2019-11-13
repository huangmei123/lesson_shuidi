//1.构建coffee类
//js 面向对象较为特别
var Coffee=function(){   //匿名函数 值是函数
    console.log('开始给您炮制咖啡，请等等');
};
Coffee.prototype.boilWater =function(){ /*给一个类添加方法 */
    console.log('把水煮沸');
} 
Coffee.prototype.brewCoffeeGriends =function(){
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pourIncup=function(){
    console.log('将咖啡倒进杯子');
}
//在类的原型上添加一个方法
Coffee.prototype.addSugerAndMilk=function(){
    console.log('添加糖和牛奶');
}
//抽象 隐蔽一些细节
Coffee.prototype.makeCoffee=function(){
  this.boilWater();
  this.brewCoffeeGriends();
  this.pourIncup();
  this.addSugerAndMilk();
  console.log('咖啡做好了，请喝吧');
}
var coffee=new Coffee();
coffee.makeCoffee();


function Tea(type){  
    //茶类
    this.type=type;
 }
var Tea=function(){
      console.log('开始为你制作茶，请稍等');
  }
  Tea.prototype.boilWater=function(){
      console.log('把水煮沸');
  }
  Tea.prototype.seepTeaBag=function(){
      console.log('用沸水浸泡茶叶');
  }
  Tea.prototype.pourIncup=function(){
      console.log('把茶水倒进杯子');
  }
  Tea.prototype.addLemon=function(){
      console.log('加柠檬');
  }
  Tea.prototype.makeTea=function(){
      //this指向实例后的对象
      this.boilWater();
      this.seepTeaBag();
      this.pourIncup();
      this.addLemon();
      console.log('茶已做好，请您品尝');
  }
  const tea=new Tea('乌龙茶');
  tea.makeTea();
  console.log(tea.type);

