// 结论： new关键字不能和apply/call一起来使用

// new bind
function foo() {
  console.log(this);
}

var bar = foo.bind("aaa");

var obj = new bar();


// new绑定 > 显式绑定（apply/call/bind） > 隐式绑定（obj.foo()） > 默认绑定（独立函数调用）