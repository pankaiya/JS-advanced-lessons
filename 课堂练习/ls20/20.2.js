//在控制台上测试，了解两点
// 一、g全局、i大小写、m换行 修饰符的作用
// 二、正则对象的两种基本使用方式 1.字符串.字符串方法（正则对象） 2.正则对象.正则方法（字符串）
var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab",index:2,input:"xxAbcaaBbxyz"]

var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab","aB"]

var regExp = /a*b/gi; //注意*和.的区别 ，参见在线分析工具 https://regexper.com或https://jex.im/regulex
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", "aaB", "b"]

var regExp = /a.b/gi;//注意*和.的区别 ，参见在线分析工具 https://regexper.com或https://jex.im/regulex
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["aaB"]

//test初步了解
var regExp = /a/i;
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));

var regExp = /a/gi;//思考如果加了g，循环了若干次后是true还是false，这是为什么？(test中的lastIndex),下一次匹配是从上一次匹配的后面开始
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？

/*
while (regExp.test("aaa")){
    console.log(regExp.lastIndex);//每次执行后从哪开始重新匹配？
}
*/