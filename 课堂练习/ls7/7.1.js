//函数定义 1、通过函数声明的形式来定义（要有函数名）
function max(a,b){
    return a>b?a:b;
}
max(2,3);//3

//函数定义 2、通过函数表达式的形式来定义（可以是没有名字的匿名函数，有名的话方便调用栈追踪）
var max = function (a,b){ //匿名函数
    return a>b?a:b;
};
max(2,3);
/*
//略讲：非匿名函数便于调用栈追踪 测试使用匿名和非匿名函数的区别
var foo = function max(a,b){
    console.trace();
    return console.log(a>b?a:b);
};
foo(2,3);

foo = function min(a,b){
    console.trace();
    return console.log(a>b?b:a);
};
foo(2,3);
*/

//函数定义 3、通过Function构造函数实例化的形式来定义（JS中的函数既是对象，函数对象）
var max = new Function("a","b","return a>b?a:b");
max(2,3);