function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);//Jack
console.log(p1.age);
p1.sayHi();

Person.__proto__===Funcion.prototype;//区分Object.prototype
Funcion.prototype.prototype===Object.prototype;