// ES6的代码块级作用域
// 对let const function class声明的类型是有效的
{
  let foo = "foo";
  function demo() {}
  class Person {}
}
// 以下全都访问不到
console.log(foo);
console.log(demo);
console.log(Person);
