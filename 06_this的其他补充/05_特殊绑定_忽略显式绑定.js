function foo() {
  console.log(this);
}

foo.apply("abc");
foo.apply({});

// apply/call/bind: 当传入null undefined时候 自动this指向window
foo.apply(null);
foo.apply(undefined);
var bar = foo.bind(null);
bar();

