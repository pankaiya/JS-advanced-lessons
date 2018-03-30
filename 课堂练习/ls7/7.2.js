//函数调用的四种方式（注意调用函数的主体）
//1、作为函数直接调用（非严格模式下this为全局变量，严格模式下为undefined)

//普通函数直接调用
function test1() {
    console.log("this is",this);
}
test1();//window
//思考嵌套的情况下
function test2() {
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//window

//2、作为方法调用（this指向调用此方法的对象）
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();//23

var x = 45;
var test = function(){
	console.log("输出：",this.x);
}
var obj = {
    x:23
};
obj.test = test;
obj.test();//输出：23
test();//输出：45

var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo();
    }
};
obj.test();//45（函数嵌套，里面的函数this指向的是window中的变量）

//思考：若直接调用sayHi();
//var name = "全局";
//sayHi();
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;//给对象添加方法
obj.sayHi();//Hi,i'm undefined

/*
//思考如下代码 详情参见高阶函数章节
var x=1;
var obj={x:23}
var fun1 = function () {
    return function fun2() {
        return this.x;
    }
};
obj.fun3 = fun1;//obj添加方法fun3=fun1
obj.fun4 = fun1();//obj添加方法fun4=function fun2(){return this.x}
console.log(obj.fun3());//function fun2(){return this.x;}
console.log(obj.fun3()());//1
console.log(obj.fun4());//23
*/


//3、通过call()和apply()间接调用（this为函数对象的call/apply方法的首个参数，移花接木）
//间接调用 实例一 间接调用的对象要和原对象之间，在数据结构上有对应的相似处，以便不影响调用效果
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB
//间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);//i'm:polly i can fly ___ 5 6
fish.swim.call(me,3,4);//i'm ABC i cam swim ___ 3 4
bird.fly.call(me,7,8);//i'm:ABC i can fly ___ 7 8



//4、作为构造函数调用（this指向实例化出来的对象）
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack