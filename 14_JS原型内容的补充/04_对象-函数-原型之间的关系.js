var obj = {
  name: "zzb",
};

console.log(obj.__proto__);

// 对象里面有一个__proto__对象：隐式原型对象

// Foo是一个函数，那么会有一个显式原型对象：Foo.prototype
// Foo.prototype来自哪里？
// 创建了一个函数Foo.prototype = { constructor: Foo }

// Foo是一个对象，那么他会有一个隐式原型对象：Foo.__proto__
// Foo.__proto__来自哪里？
// new Function()  Foo.__proto__ = Function.prototype
// Function.prototype = { constructor: Function }

// Foo 是这样创造出来的 var Foo = new Function() 下面只是语法糖
function Foo() {}

console.log(Foo.prototype === Foo.__proto__); // false
console.log(Foo.prototype.constructor); // [Function: Foo]
console.log(Foo.__proto__.constructor); // [Function: Function]
console.log(Object.prototype.__proto__)