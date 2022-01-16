const names = ["abc", "qwe", "asd"];
const name = "why";
const info = { name: "zzb", age: 18 };

// 1.函数调用时
function foo(x, y, z) {
  console.log(x, y, z);
}
// 就是把数组 字符串展开成一个个变量传进去

// ES5的写法
// foo.apply(null, names);
// 展开运算符
foo(...names);
foo(...name);

// 2.构造数组时
const arr = [...names, ...name];
console.log(arr);

// 3.构造对象字面量时ES2018（ES9)
const obj = { ...info, address: "上海市" };
console.log(obj);
