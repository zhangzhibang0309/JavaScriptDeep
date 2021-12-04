function foo() {
  var name = " why";
  var age = 18;

  function bar() {
    // 只用了name 而没用age 内存中的闭包会不会销毁age呢
    // 答案是会的 虽然ecma规范中，age按理来说也应该存在于AO中，AO没有被销毁，age自然不会销毁
    // 但是规范是规范 v8实现的时候是很灵活的 会将AO中没用到的变量内存给销毁
    console.log(name);
  }
}
