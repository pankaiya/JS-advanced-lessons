//1111111111、JS预解析-声明提升

console.log(a);
var a = 1;
console.log(a);
//上边代码等价如下 解析器眼中的代码
var a;
console.log(a);
a = 1;
console.log(a);

//思考如下代码输出什么 值类型
console.log(a,b);//undefined undefined
var b = 23;
console.log(a,b);//undefined 23
var a = b;
console.log(a,b);//23 23

//思考如下代码输出什么 引用类型
console.log(obj1,obj2);//undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//Object{x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//Object{x:23} Object{x:23}
obj2.x =25;
console.log(obj1,obj2);//Object{x:25} Object{x:25}

//函数及变量声明重复的话，相当于覆盖
foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2

//同时有var和function关键字时（情景一函数表达式）
foo();
var foo = function(){
    console.log("foo");
};//报错

//当function前有运算符的话，认定为表达式，不提升
console.log(foo);//输出什么
var foo = function(){
    console.log("foo");
};
foo();//foo

//同时有var和function关键字时（情景二：变量名同函数名）
AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();

//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();
