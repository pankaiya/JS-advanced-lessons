//for ... in 遍历数组
var arr = [2,"33"];
for(var i in arr){
    console.log(i,arr[i]);
}//0 2      1 33

//for ... in 遍历对象
var obj = {x:10,y:20,z:"30"};
for(var k in obj){
    console.log(k,obj[k],typeof obj[k]);
}//x 10 number
 //y 20 number
 //z 30 string
