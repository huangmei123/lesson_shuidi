function Person(name,age){
    this.name=name;
    this.age=age;
}

//tostring方法覆盖了Object原有的toString方法。
Person.prototype.toString=function(){
    return 'I am a person,my name is' +this.name;
}
function Man(name,age){
    //Person是一个构造函数 把父类的构造函数执行一下
    console.log(arguments,'------')
    Person.apply(this,arguments);//apply与call类似
    
}
//create做一个新的对象出来 
Man.prototype=Object.create(Person.prototype);

//覆盖掉tostring
Man.prototype.toString=function(){
     return 'I am 007, my name is'+this.name;
}
var cxc=new Man("陈新初",18); 
console.log(cxc.toString());//console.log(cxc+"");

var person =new Person('mua',12);
console.log(person +"");//字符串化 。是一个类型转化的语言
const arr=['陈新初','陈方闻'];
//Object为{}空对象 .call()借一下 把方法借给另一个使用
console.log(Object.prototype.toString.call(arr) );
//[object Array]




