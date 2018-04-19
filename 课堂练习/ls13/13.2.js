//JS对象分类（标准的内置对象分为：构造器函数对象和非构造器对象（math、json））
//Part 1
var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");

// typeof
console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Number);//function
console.log(typeof String);//function
console.log(typeof Boolean);//function
console.log(typeof Math);//object(是一个内置对象，但不是构造函数)
console.log(typeof JSON);//object

// Part 2
// instanceof
console.log(Object instanceof Function);//true
console.log(Object instanceof Object);//true
console.log(Boolean instanceof Function);//true
console.log(Boolean instanceof Object);//true
console.log(String instanceof Function);//true
console.log(String instanceof Object);//true
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Math instanceof Function);//false(Math是一个内置对象，但不是构造函数)
console.log(Math instanceof Object);//true
console.log(JSON instanceof Function);//false(JSON是一个内置对象，但不是构造函数)
console.log(JSON instanceof Object);//true