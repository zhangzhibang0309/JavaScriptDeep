// 1.编写箭头函数
// 1> (): 参数
// 2> =->: 箭头

const { log } = require("console");

// 3> {}: 函数的执行体
var foo = (num1, num2, num3) => {
  console.log(num1, num2, num3);
  var result = num1 + num2 + num3;
  console.log(result);
};

function bar(num1, num2, num3) {}

// 高阶函数在使用时，也可以传入箭头函数
var nums = [10, 20, 45, 78];
nums.forEach((item, index, arr) => {});

// 箭头函数有一些常见的简写
// 简写一 参数只有一个 ()可以省略
nums.forEach((item) => {
  console, log(item);
});
// 简写二 如果函数执行体 只有一行代码 那么大括号可以省略
// 并且会将这行代码的执行结果最为返回值
nums.forEach((item) => console.log(item));
var newNums = nums.filter((item) => item % 2 == 0);
console.log(newNums);

// filter/map/reduce一起用
var result = nums
  .filter((item) => item % 2 == 0)
  .map((item) => item * 100)
  .reduce((preValue, item) => preValue + item);

console.log(result);

// 简写三： 如果一个箭头函数，只有一行代码，并且返回一个对象 这个时候如何别写简写
var bar = () => ({ name: "zzb", age: 18 });
console.log(bar());
