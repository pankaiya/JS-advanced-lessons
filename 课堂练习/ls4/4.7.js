//严格模式下禁止删除不可改变的属性的变量
var str="abc";
function sloppyFunc(){
str.length=7;
console.log(str.length);
}
sloppyFunc();//3

var str="abc";
function sloppyFunc(){
"use strict";
str.length=7;
console.log(str.length);
}
sloppyFunc();//报错



//严格模式下禁止删除未定义的变量
delete foo;
delete window.foo;//true

'use strict';
delete foo;
delete window.foo;//报错



//严格模式下禁止函数参数重命名
function f(a, a, b) {
    return a+b;
}
f(2,3,4);//正常执行 7

"use strict";
function f(a, a, b) {
    return a+b;
}
f(2,3,4);//报错