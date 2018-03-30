//参数类型与传递方式（值、引用）

//值传递
var a=1;
function foo(x){
x=2;
console.log("a:",a,"x:",x);
}
foo(a);//a:1 x:2
console.log(a);//1

//引用传递
var obj={x:1}
function fee(o){
o.x=3;
console.log(obj.x,o.x);
}
fee(obj);//3 3
console.log("obj.x:",obj.x);//obj.x:3