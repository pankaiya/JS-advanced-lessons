//2018/4/26
//一般函数中的this（非严格松散模式下）

//一般函数中的this，指定全局变量
function thisTest(){
    console.log(this === window);
}
thisTest();//true
//可以通过this在函数中添加、删除、修改全局变量属性
var a = 10;b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);//20 "新添加属性"

//变量前没有var,则是全局变量
function thisTest(){
    a=2;
}
thisTest();
console.log(a);

function thisTest(){
    var a=b=2;//var a=2;b=2;所以a是局部变量，b是全局变量
 }
 thisTest();
 console.log(a);//undefined
 console.log(b);//2

//私有属性 闭包
 var Person=function(name,age){
    this.name=name;
        this.age=age;
    this.showMe=function(){
    console.log(this.name,this.age);
    }
    }
    var p1=new Person("Mike",23);
    var p2=new Person("Lucy",22);
    p1.showMe();
    p2.showMe();

var Person=function(name,age){
     this.name=name;
        this.age=age;
    showMe=function(){
    console.log(name,age);
    }
    }
    var p1=new Person("Mike",23);
    var p2=new Person("Lucy",22);
    p1.showMe();

//思考：试着通过call/apply方法和bind两种方法解决上边的问题
    function Point(x,y) {
        this.x = x;
        this.y = y;
        this.moveXY = function (x,y) {
            function moveX(x) {
                this.x+=x;//this改为that
            }
            function moveY(y) {
                this.y+=y;//this改为that
            }
            moveX.call(this,x);//this只向的是实例化出来的对象p
            moveY.apply(this,[y]);
        }
    }
    var p = new Point(2,3);
    p.moveXY(1,1);
    console.log(p);//Point {x: 3, y: 4}

    function Point(x,y) {
        this.x = x;
        this.y = y;
        this.moveXY = function (x,y) {
            function moveX(x) {
                this.x+=x;//this改为that
            }
            function moveY(y) {
                this.y+=y;//this改为that
            }
            moveX.bind(this,x)();//注意带后面的小括号，是一个函数方法，还要调用
            moveY.bind(this,y)();
        }
    }
    var p = new Point(2,3);
    p.moveXY(1,1);
    console.log(p);