"use strict";
// var message = "Hello World";

// with语句可以形成自己的作用域

var obj = { name: "zzb", age: 18, message: "aaaaa" };
function foo() {
  function bar() {
    with (obj) {
      console.log(message);
    }
  }
  bar();
}
foo();

// with知道就好 不建议用这个语法 严格模式不能用with
