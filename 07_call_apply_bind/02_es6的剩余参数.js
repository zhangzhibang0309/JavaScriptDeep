// rest parameters
function sum(...nums) {
  console.log(nums);
}
sum(10);
sum(10, 20);
sum(10, 20, 30);
sum(10, 20, 30, 40);

// 展开运算符 spread
var names = ["aba", "dss", "qwe"];

var newNames = [...names];

function foo(num1,num2,num3) {

}

foo(...names)
