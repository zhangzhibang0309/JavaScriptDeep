// 案例一
// var foo = () => {
//   console.log(arguments);

// };
// // arguments往上找 node上层有 浏览器没有
// // node执行值包在一个函数里面执行的 所以有arguments
// foo()

// function bar() {
//   console.log(arguments);
// }
// bar();

// 案例二
// 展示去上层找qrguments
// function foo() {
//   var bar = () => {
//     console.log(arguments);
//   };
//   return bar;
// }
// var fn = foo(123);
// fn();

// 案例三
//现在不推荐arguments es6之后用..args
function foo(num1, num2, ...args) {
  console.log(args);
}

foo(10, 20, 30, 40, 50);
