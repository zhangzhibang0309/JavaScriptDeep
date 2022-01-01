function foo() {}

// 1.constructor属性（自带）
// console.log(foo.prototype);
// console.log(Object.getOwnPropertyDescriptors(foo.prototype));

// Object.defineProperty(foo.prototype, "constructor", {
//   value: "哈哈哈",
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });
// console.log(foo.prototype.constructor.name);
// console.log(
//   foo.prototype.constructor.prototype.constructor.prototype.constructor
// );

// 2.我们也可以添加自己的属性
// foo.prototype.name = "zzb";
// foo.prototype.age = 18;
// foo.prototype.height = 1.88;
// foo.prototype.address = "背景"; // 写法麻烦

// var f1 = new foo();
// console.log(f1.name, f1.age);

// 3.直接修改整个prototype对象
foo.prototype = {
  //  constructor: foo,
  name: "zzb",
  age: 18,
  height: 1.88,
};
var f1 = new foo();
console.log(f1.name, f1.age, f1.height);
// 真实开发中 constructor应该通过definePeoperty方式去添加
Object.defineProperty(foo.prototype, "constructor", {
  value: foo,
  configurable: true,
  enumerable: false,
  writable: true,
});

console.log(foo.prototype);
console.log(foo.prototype.constructor);
