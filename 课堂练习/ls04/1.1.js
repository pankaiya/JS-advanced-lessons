
    //typeof类型检测
    console.log(typeof 123);//number
    console.log(typeof true);//boolean
    console.log(typeof "abc");//string
    console.log(typeof {name:"Mike",age:20});//object
    console.log(typeof null);//object
    console.log(typeof Null);//undefined
    console.log(typeof undefined);//undefined
    
    console.log(typeof function foo(){});//function
    console.log(typeof Array);//function
    console.log(typeof Function);//function
    console.log(typeof Date);//function
    console.log(typeof Number);//function
    //instanceof类型检测
    var a={name:"Mike",age:20};
    console.log(a instanceof Object);//true

    var b = [12,34,{},""];
    console.log(b instanceof Array);//true
    console.log(b instanceof Object);//true

    var Person = function(){
        //...
    };
    var p1 = new Person();
    console.log(p1 instanceof Person);//true
    console.log(p1 instanceof Object);//true

    
    

