// 独立函数调用

// 案例一
// function foo() {
//   console.log(this);
// }

// foo(); // window

// 案例二
// function foo1() {
//   console.log(this);
// }
// function foo2() {
//   console.log(this);
//   foo1();
// }
// function foo3() {
//   console.log(this);
//   foo2();
// }
// foo3(); // window

// 案例三
// var obj = {
//   name: "zzb",
//   foo: function () {
//     console.log(this);
//   },
// };

// var bar = obj.foo;
// bar(); // window

// 案例四
// function foo() {
//   console.log(this);
// }

// var obj = {
//   name: "zzb",
//   foo: foo,
// };
// var bar = obj.foo;
// bar(); // window

// 案例五
function foo() {
  function bar() {
    console.log(this);
  }
  return bar;
}

var fn = foo();
fn(); // 无调用主题 还是window

var obj = {
  name: "zzb",
  eating: fn,
};

obj.eating(); // 有调用主题 -- 这就是隐式调用
