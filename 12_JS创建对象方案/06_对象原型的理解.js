// 我们每个对象中都有一个[[prototype]],这个属性可以称之为对象的原型（隐式原型）

var obj = { name: "zzb" }; // [[prototype]]
var info = {}; // [[prototype]]

// 解释原型的概念 并且看一下原型

// 1、 早期的ecma是没有规范如何去查看[[prototype]]
// 所以有些浏览器给对象中提供了一个属性，可以让我们查看一下这个原型对象（有些浏览器提供 有些不提供）
// __proto__
// console.log(obj.__proto__); // {}
// console.log(info.__proto__); // {}
// var obj = { name: "zzb",__proto__: {} };
// es5之后梯控的Object.getPrototypeOf
// console.log(Object.getPrototypeOf(obj)) // {}

// 2.原型有什么用呢？
// 当我们从一个对象中获取某一个属性时，他会触发[[get]]操作
// 1. 在当前对象中去查找对应的属性，如果找到就直接使用
// 2. 如果没有找到，那么会沿着它的原型去查找[[prototype]]
// obj.age = 18
console.log(obj.age);
obj.__proto__.age = 18;
console.log(obj.age); // 先找对象里面的属性 没有的话再找原型
