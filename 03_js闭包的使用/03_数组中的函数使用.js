// 一些高阶函数

var nums = [10, 5, 11, 100, 55];

var newNums = [];
// for (var i = 0; i < nums.length; i++) {
//   var num = nums[i];
//   if (num % 2 == 0) {
//     newNums.push(num);
//   }
// }
// console.log(newNums);

// 函数function：独立的function，那么称之为是一个函数
function foo() {}
// 方法method：当我们的一个函数属于某一个对象时，我们称这个函数是对象的方法
var obj = {
  foo: function () {},
};
obj.foo();

// filter:过滤
var newNums = nums.filter(function (item, index, arr) {
  return item % 2 === 0;
});
console.log(newNums);

// map：映射
var newNums2 = nums.map(function (item) {
  return item * 10;
});
console.log(newNums2);

// forEach: 迭代
nums.forEach(function (item) {
  console.log(item);
});

//find/findIndex
var item = nums.find(function (item) {
  return item === 11;
});
console.log(item);

var friends = [
  { name: "zzb", age: 18 },
  { name: "kobe", age: 39 },
  { name: "james", age: 40 },
  { name: "curry", age: 56 },
];
var findFriend = friends.find(function (item) {
  return item.name === "james";
});
console.log(findFriend);

var friendIndex = friends.findIndex(function (item) {
  return item.name === "james";
});
console.log(friendIndex);

// reduce:累加
// nums.reduce

// var nums = [10, 5, 11, 100, 55];
var total = 0;
// for (var i = 0; i < nums.length; i++) {
//   total += nums[i];
// }
// console.log(total);
var total = nums.reduce(function (preValue, item) {
  return preValue + item;
}, 0);
console.log(total);
