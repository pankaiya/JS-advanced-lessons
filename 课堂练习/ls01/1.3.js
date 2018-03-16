//基本（原始）数据类型与引用（对象）类型的区别 赋值方式不同
    var str_a = "a"; 
    var str_b = str_a; //原始类型直接访问值,是值赋值
    str_b = "b"; 
    console.log(str_a,str_b);//a b


    var obj_a={v:"a"};
    var obj_b=obj_a;// 引用赋值，指向同一块堆内存空间，所以值相等
    obj_b.v="b";
    console.log(obj_a,obj_b);//Object {v: "b"}  Object {v: "b"}

    obj_b = {v:"c"};//这里会在堆内存中创建一个新的对象值:{v:"c"},而现在的obj_b引用的是这个对象
    console.log(obj_a,obj_b);//Object {v: "b"}  Object {v: "c"}(两者在内存中引用的是不同的对象)

//注意：是值赋值还是引用赋值取决于变量的类型，而不取决于变量分配在堆区还是栈区
//原始类型的数据比较的就是值是否相等，引用类型的变量的比较的是否是同一块区间（所以即便值相等，不是同一块空间也不等。）
    var obj_c = {x1:2,y1:3};
    var obj_d = {x2:2,y2:3};
    console.log(obj_c.x1 === obj_d.x2);//true(?)
    console.log(obj_c === obj_d);//false

    console.log({m:1}==={m:1});//false

//经典案例
    var a =123;
    function foo1(x){
	    x = 345;
    }
    foo1(a);
    console.log(a);//123

    var a ={y:123};
    function foo2(x){
	    x.y = 345;
    }
    foo2(a);
    console.log(a.y);//345

    var a ={y:123};
    function foo3(x){
	    x.y = 345;
	    x = {y:456};
    }
    foo3(a);
    console.log(a.y);//345（区分全局变量还有局部变量）

    var a ={y:123};
    function foo4(x){
        x = {y:456};	
        x.y = 345;	
    }
    foo4(a);
    console.log(a.y);//123(再函数内创建了一个新的变量，之后修改的也是新的内存空间的值)
