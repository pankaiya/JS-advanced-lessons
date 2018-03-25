//ES5 中没有块作用域
{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);

for(var i = 0;i<5;i++){
    console.log("in for ",i);//in for 0;in for 1;in for 2;in for 3;in for 4;
}
console.log("out of for ",i);//out of for 5

if(true){
    var a = 20;
}
console.log(a);//20

// 你是否能够区分undefined和undeclared
if(false){
    var b = 30;
}
console.log(b);//undefined