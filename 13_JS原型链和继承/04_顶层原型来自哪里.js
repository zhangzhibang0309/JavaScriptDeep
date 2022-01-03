// var obj1 = {}; // 字面量创建对象 -- 字面量方式创建对象其实是new object方式的语法糖 它的__proto__指向的就是object的prototype
// var obj2 = new Object(); //new object构造函数创建对象 -- 这个对象的__proto__指向object的prototype 也是原型链的最顶层

// function Person() {}
// var p = new Person(); // 这种形式的话__proto__指向的就是Person的prototype了

var obj = {
  name: "zzb",
  age: 18,
};

// 继承
var obj2 = {
  address: "北京市",
};
obj.prototype = obj2;

//
// console.log(obj.__proto__);
// console.log(Object.prototype);
// console.log(obj.__proto__ === Object.prototype); // true

console.log(Object.prototype); // 顶层原型 [Object: null prototype] {}
console.log(Object.prototype.constructor);
console.log(Object.prototype.__proto__); // 顶层原型也有一个原型__proto__ 指向null
// 但是Object.prototype并不是空的（） 只是不可枚举 我们查看一下
console.log(Object.getOwnPropertyDescriptors(Object.prototype));
