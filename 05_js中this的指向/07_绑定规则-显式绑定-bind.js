function foo() {
  console.log(this);
}

// foo.call("aaa")
// foo.call("aaa")
// foo.call("aaa")
// foo.call("aaa")


// 默认绑定和显式绑定bind 显式绑定优先级更高
var newFoo = foo.bind("aaa");
newFoo();