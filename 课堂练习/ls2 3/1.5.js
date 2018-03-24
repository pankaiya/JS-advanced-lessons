// 基本（原始）数据类型与引用（对象）类型的区别2 函数参数传递方式不同

//值传递
var str_a = "Hello World";
function fn_a(arg){
    console.log(arg); // Hello World
    arg = "Hai";
    console.log(str_a,arg); //  Hello World , Hai
};
fn_a(str_a);
console.log(str_a);//Hello World

//内存中分配了新的空间来保存函数参数和其值(函数运行后自动释放这部分内存)
//所以不会改变star_a的值


// 引用传递
var obj_a = {value:1};
function fn_a(arg){
    arg.value=3;
};
fn_a(obj_a);
console.log(obj_a);// obj_a{value:3}

function fn_b(arg){
    arg={value:2};//创建了一个新的对象，arg指向新对象
};
fn_b(obj_a);
console.log(obj_a);// obj_a{value:3}

// 两个函数都是传址，而这个址引用了obj_a在内存中对应的对象，
// 两个函数中的arg起初都是引用和obj_a同一个内存中的对象值，
// 而fn_a中访问的依旧是和obj_a同一个内存对象，所以fn_a修改是成功的，
// 但是在fn_b中重新为arg赋值新的对象，arg指向新对象并不会影响obj_a


