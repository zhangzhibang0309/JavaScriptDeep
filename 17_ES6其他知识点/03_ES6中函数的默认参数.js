// ES6可以给函数参数提供默认值
function foo(m = "aaa", n = "bbb") {
  console.log(m, n);
}
foo();

// 对象参数和默认值以及结构
function printInfo({ name, age } = { name: "zzb", age: 18 }) {
  console.log(name, age);
}
printInfo({ name: "kobe", age: "40" });

// 有默认值的参数放到最后
function bar(x, y, z = 30) {
  console.log(x, y, z);
}
bar(1, 2);

// 有默认值的参数放到最后
function baz(x, y, z = 30, m, n) {
  console.log(x, y, z, m, n);
}
console.log(baz.length);
