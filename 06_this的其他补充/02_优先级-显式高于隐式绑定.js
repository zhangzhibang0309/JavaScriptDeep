// var obj = {
//   name: "obj",
//   foo: function () {
//     console.log(this);
//   },
// };

// obj.foo(); // obj

// 1.call/apply的显式绑定高于隐式绑定
// obj.foo.call("abc");

// 2.bind 隐式绑定 这个不太明显
// var bar = obj.foo.bind("cba");
// bar();

// 3. 更明显的比较 说明bind比隐式绑定优先级更高
function foo() {
  console.log(this);
}

var obj = {
  name: "obj",
  foo: foo.bind("cba"),
};
obj.foo();

// 有个比较有意思的 bind和call比较
// foo.bind("abc").call("qwe"); // this式abc 说明bind 更高
