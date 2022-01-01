function Person() {}

var p1 = new Person();
var p2 = new Person();

// 都是true
// 因为这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性；
console.log(p1.__proto__ == Person.prototype);
console.log(p2.__proto__ == Person.prototype);

p1.__proto__.name = "kobe";
console.log(p1.name);

// 像上面所展示的 具体的还是画个图来说明
