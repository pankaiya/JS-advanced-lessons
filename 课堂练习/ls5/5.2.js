//算数运算符
//加号会变成连接符（所以数字会变成字符串），减号就是减号（所以非数字类型变成数字类型）
console.log("1"+"2"); //"12"
console.log("1"+2); //"12"
console.log(1+{}); //"1[object Object]"
console.log(true+true); //2
console.log("5"-2); //3

var x = "1";
console.log(++x); //2 注意++和--的隐式类型转换
var x = "1";
console.log(x+1);//11

//+=在不同的情况下转化的类型不同
var x = "1";
console.log(x+=1);//11
var x = 1;
console.log(x+=1);//2

//++i
var i=1;
var y = ++i + ++i + ++i;
console.log(y);//9