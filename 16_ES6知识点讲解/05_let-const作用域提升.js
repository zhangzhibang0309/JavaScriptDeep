// console.log(foo)
// var foo = "foo"

// ReferenceError: Cannot access 'foo' before initialization
// let const没有作用域提升
// foo其实是被创建出来了，但是不能被访问
// 作用域提升：能提前被访问
// 在新的es规范中 已经没有了VO 现在在是VE（词法环境） 是已经有了 但是在绑定value之前不允许访问
console.log(foo);
let foo = "foo";
