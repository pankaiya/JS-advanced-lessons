//逻辑&&和||
console.log(2>1&&4<5);
console.log(true&&(!2));
console.log(false&&("2" == 2));
console.log(false&&false);

console.log(2>1||4<5);
console.log(true||(!2));
console.log(false||("2" == 2));
console.log(false||false);

//操作数非布尔类型，&&短路原则(若左操作数为true,直接返回右操作数；若为false，直接返回原始左操作数)
console.log(2&&4);//4
console.log(0&&4);//0
console.log({x:2}&&{name:"Jack"});//object{name:"Jack"}
console.log(null&&"hello");//hello
console.log({}&&"world");//world

//操作数非布尔类型，||短路原则（若左操作数为true，则直接返回原始左操作数；若为false,则直接返回原始右操作数
console.log(2||4);//2
console.log(0||4);//4
console.log({x:2}||{name:"Jack"});//object{x:2}
console.log(null||"hello");//hello
console.log({}||"world");//Object {}