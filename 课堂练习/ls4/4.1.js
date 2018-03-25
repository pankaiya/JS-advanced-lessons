//上一章数据类型回顾 part1~part3
//part1(对象数据类型什么时候才会开辟新的内存空间)
var a = [1,2,3];
var b = a;
console.log(a,b);//[1,2,3] [1,2,3]
b.pop();
console.log(a,b);//[1,2] [1,2]
b = [4,5,6];
console.log(a,b);//[1,2] [4,5,6]

//part2
function foo(x) {
    x.push(4);
    x = [5,6,7];
    x.push(8);
}
var a = [1,2,3];
foo(a);
console.log(a);//[1,2,3,4]

//part3
function foo(x) {
    x.push(4);
    x.length = 0;
    x.push(5,6,7,8);
}
var a = [1,2,3];
foo(a);
console.log(a);//[5,6,7,8]


//字面量
var obj = {x:1,y:2};//对象字面量
var arr = [1,2,3,4,5]//数组字面量

//标识符：用来给变量或者函数进行命名，以字母、下划线或者$开始
//保留字（关键字）：arguments、break、case、catch、calss、const

//表达式及表达式分类 
23;//其中的23为原始表达式
obj = {x:2};// ={x:2}为对象初始化表达式
arr = [1,2];// =[1,2]为数组初始化表达式
var foo = function(){ // = function(){}为函数定义表达式
    console.log("foo");
};
obj.x;//obj.x为属性访问表达式
foo();//foo()为函数调用表达式
2+3;//2+3为算数运算表达式
2>3;//2>3为关系运算表达式
1&&2;//1&&2为逻辑运算表达式

//语句及语句分类
2>3;//表达式语句

var a=2,b=3;
if(a>b){
    console.log("a > b");
}else{
    console.log("a < b");
}//条件语句

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out for ",i);//条件语句

//扩展知识在chrome中测试下述代码： var a,b;  与 var a=b;   谁是局部变量，谁是全局变量？
function foo(){
	var a=b=3;
}
foo();
console.log("b:",b);//3,b是全局变量
console.log("a:",a);//报错


