// 严格模式的目的：
// 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
// 消除代码运行的一些不安全之处，保证代码运行的安全

// 严格模式使用方式
"use strict"//全局使用

function foo() {
    "use strict"//函数内部使用
}

//严格模式下全局变量需要显示声明
function sloppyFunc(){
    sloppyVar=123;
}
sloppyFunc();
console.log(sloppyFunc);//123

function sloppyFunc(){
    'use strict';
    sloppyVar=123;
}
sloppyFunc();
console.log(sloppyFunc);//报错

//检验是否在严格模式下的方法
function isStrictMode(){
    return this===undefined?true:false;
    }
    isStrictMode();//false

'use strict'
 function isStrictMode(){
    return this===undefined?true:false;
    }
    isStrictMode();//true