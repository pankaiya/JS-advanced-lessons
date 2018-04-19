//JS对象的属性：数据属性、访问器属性、内置属性
//访问器属性：访问和设置时不加括号，访问器属性不同于数据属性，存取器不具有可写的具体特性。
//访问器属性不包含数据值，它包含一对getter和serrer函数，实现数据属性的间接访问，从而实现数据的验证、过滤、运算等功能

// 访问器属性 实例一
var o = {
    _x:1.0,//如果都写成x会怎样
    get x(){
        return this._x;//如果都写成x会怎样？会报错
    },
    set x(val){
        this._x = val;//如果都写成x会怎样
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//2 2
//o.hasOwnProperty("x");//访问器属性
//o.hasOwnProperty("_x");//数据属性

//访问器属性 实例二 只读
var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//1 1(x、_x是一个变量？)

var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x);//1

// 访问器属性 实例三
var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;//请设置正常年龄
console.log(p1.age);// 23

//访问器属性 综合实例
var p ={
    x:1,
    y:1,
    get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
    set r(newValue){
        var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio = newValue/oldValue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){return Math.atan2(this.y,this.x);}
};
var q = Object.create(p);
q.x = 2;
q.y = 2;
console.log(q.r);//2.8284271247461903
console.log(q.theta);//0.7853981633974483
