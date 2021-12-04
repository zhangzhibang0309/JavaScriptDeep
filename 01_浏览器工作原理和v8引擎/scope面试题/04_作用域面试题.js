function foo() {
  //   m = 100  // 这种情况直接定义在全局对象go里面 但是不要这样写
  var m = 100; // 加入到AO中
}

foo();
console.log(m); // =>报错