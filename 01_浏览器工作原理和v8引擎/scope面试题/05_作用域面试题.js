function foo() {
  var a = (b = 100);
  // 上面这个代码会转成下面两行
  // b = 100
  // var a = 100
}

foo();

console.log(a); // 报错
console.log(b); // 100
