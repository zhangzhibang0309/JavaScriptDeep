// "use strict"

// 1.意外创建全局变量
// message = "abc";

// function foo() {
//   age = 20;
// }
// foo()
// console.log(age)

// 2, 不允许函数有相同的参数名称
// function foo(x, y, x) {
//   console.log(x, y, z);
// }
// foo(10, 20, 30);

// 3.静默错误
// true.foo = "asd";
// NaN = 100;

// var obj = {};
// Object.defineProperty(obj, "name", {
//   configurable: false,
//   writable: false,
//   value: "zzb",
// });
// console.log(obj.name);
// obj.name = "aaa"; // ×
// delete obj.name; // ×

// 4.不允许使用原先的八进制格式
// var num = 0o123; // 八进制写法
// var num2 = 0x123; // 十六进制
// var num3 = 0b100; // 二进制

// 5. with不能使用

// 6.eval函数不会向上引用变量
// var jsString = 'var message = "Hello World";console.log(message);';
// eval(jsString);
// console.log(message);