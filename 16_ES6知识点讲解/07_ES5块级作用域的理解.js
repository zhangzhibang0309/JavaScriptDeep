// 块代码（block code）
{
  // 声明一个变量
  var foo = "foo";
}
console.log(foo);

// ES5之前 没有块级作用域
// 它只有两个作用域：
// 1.全局作用域 
// 2.函数作用域
function foo() {
    var bar = "bar"
}
console.log(bar) // 访问不到
