// 是纯函数 相同输入相同输出 没有副作用
function foo(num1, num2) {
  return num1 * 2 + num2 * num2;
}
console.log("*****************");

// 不是纯函数 因为它修改了外界变量
var name = "asd";
function bar() {
  console.log("bar其他的代码执行");
  name = "cba";
}
bar(); // name改变
console.log("*****************");
//
function baz(info) {
  info.age = 100;
}
var obj = {
  name: "zzb",
  age: 18,
};
baz(obj);
console.log(obj);
console.log("*****************");

// test是一个纯函数
// 虽然返回的并不是同一个对象 但是相同输入 输出的对象内容是一样的
function test(info) {
  return {
    ...info,
    age: 100,
  };
}
test(obj);

// react的函数组件（类组件）
// 这就不是纯函数了 把props对象给修改了
function HelloWorld(props) {
  props.info = {};
  props.info.name = "zzb";
}

// 纯函数修改数据怎么搞
var info = {};
function fooU(obj) {
  return { ...obj, name: "zzb" };
}

info = fooU(info);