//字符串常用操作
var str = "abc_def_ghi_jkl_mn";

console.log(str.split("_"));//["abc", "def", "ghi", "jkl", "mn"]
console.log(str.split("_",2));//["abc","def"]

console.log(str.concat("_opq"));//abc_def_ghi_jkl_mn_opq(连接两个字符串)

console.log(str.substr(4,7));//def_ghi（从第五个字符开始截取，长度为7的字符串）
console.log(str.substring(4,7));//def（截取第五个到第八个字符）

console.log(str.slice(2));//c_def_ghi_jkl_mn（第三个字符开始截取到最后）
console.log(str.slice(2,5));//c_d（截取第三个到第五个字符）
console.log(str.slice(-2));//mn（从倒数第二个字符开始截取，到最后）
console.log(str.slice(2,-2));//c_def_ghi_jki_（从第三个字符开始截取，到倒数第二个之前）