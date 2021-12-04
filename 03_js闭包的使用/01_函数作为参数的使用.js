// JavaScript灵活的很 可以作为参数 实现这种写法
function calc(num1, num2, calcFn) {
  console.log(calcFn(num1, num2));
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

var m = 20;
var n = 30;
calc(m, n, add);
