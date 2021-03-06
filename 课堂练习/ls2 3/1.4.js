//基本（原始）数据类型与引用（对象）类型的区别1 判等不同
var a1 = 10;
var b1 = 10;
console.log(a1 == b1);//true
console.log(a1 === b1);//true

var a2 = new Number(200);
var b2 = new Number(200);
console.log(a2 == b2);//false
console.log(a2 === b2);//false

var a3 = new Number(200);
var b3 = a3;
console.log(a3 == b3);//true
console.log(a3 === b3);//true
b3 = new Number(200);
console.log(a3 === b3);//false

var a4 = new Number(200);
var b4 = 200;
console.log(a4 == b4);//true  思考：是b4转换了，还是a4转换了？
console.log(a4 === b4);//false

var a5 = {x:1,y:2};
var b5 = {x:1,y:2};
console.log(a5 === b5);//false (不同的内存空间)
console.log(a5.x === a5.x);//true（？）