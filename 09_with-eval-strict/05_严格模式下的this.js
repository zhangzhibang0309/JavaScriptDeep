"use strict";
// 独立调用的函数在严格模式下this为undefined
// function foo() {
//   console.log(this);
// }

// var obj = {
//   name: "zzb",
//   foo: foo,
// };

// foo();
// obj.foo();

// setTimeout的this
// 按照上面的理论，发现输出还是window，所以说明这个定时器的实现，传进去的函数时手动绑定的window
setTimeout(function () {
  console.log(this); // window
}, 1000);
