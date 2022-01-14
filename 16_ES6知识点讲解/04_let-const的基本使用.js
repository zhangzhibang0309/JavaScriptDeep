// var foo = "foo"
// let bar = "bar"

// const constant(常量/衡量)
// const name = "abc";
// name = "cba";

//注意事项1：const本质上是传递的值不可以修改
// 但是如果传入了一个引用值（内存地址），可以通过引用炸掉对应的对象，去修改对象内部的属性，这个是可以的
const obj = {
  foo: "foo",
};

// obj = {}; // 报错
obj.foo = "aaa"; // 不报错
console.log(obj.foo);

// 注意事项2：通过let、const定义的变量名不能重复定义
// var foo = "abc"
// var foo = "qwe"

let foo = "abc";
// SyntaxError: Identifier 'foo' has already been declared
// let foo = "asd";
