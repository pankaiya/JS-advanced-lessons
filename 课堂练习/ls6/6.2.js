//使用&&和||可以实现条件语句
var score = 76;
if(score>90){
    console.log("优");
}else if(score>75){
    console.log("良");
}else if(score>60){
    console.log("及格");
}else{
    console.log("不及格");
}

console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");//良（小括号优先级高）

//使用||来实现设置函数参数的默认值
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
    // console.log(sum(1,0,0));
    //无漏洞版
    var sum = function(a,b,c){
        if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
        if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
        return a+b+c;
    };
    console.log(sum(1,2,3));//6
    console.log(sum(1,2));//8
    console.log(sum(1));//10
    console.log(sum(1,0,0));//1
