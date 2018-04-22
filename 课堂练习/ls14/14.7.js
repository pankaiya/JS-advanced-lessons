//JS对象属性（数据属性）的特性：
//defineProperth方法设置以下特性
//属性的值（value)，对应的属性值
//可写特性（writable)，确定属性是否为可写性
//可配置特性(configurable)，确定属性是否能删除和其它特性是否可配置
//可枚举特性(enumerabe)，属性是否可枚举

var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}//y 2

//思考：如果只更改writable特性的话，enumerable特性是否被修改



