//字符串比较
console.log("A" > "a");//false
console.log("B".localeCompare("A")); //1   
console.log("A".localeCompare("A")); //0
console.log("A".localeCompare("B"));//-1

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;
console.log(c);//abcde

//字符串常用方法，字符串的方法源于String.prototype
var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);

var str6 = "abcdef".split("c");//返回数组
var str7 = "abcdef".split("c",1);
var str8 = "abcdef".split("c",2);

var str9 = "abcdef".charAt(2);
var str10 = "abcdef".charCodeAt(3);
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);//str13 未受到破坏

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏
