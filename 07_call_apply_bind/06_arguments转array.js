function foo(num1, num2) {
  var newArray = [];
  //1.自己遍历
  //   for (var i = 0; i < arguments.length; i++) {
  //     newArray.push(arguments[i] * 10);
  //   }
  //   console.log(newArray);

  //2. arguments转成array类型
  //2.1 自己遍历arguments中所有的元素
  //上面就是这么实现的

  //2.2 将arguments转成array
  var newArray2 = Array.prototype.slice.call(arguments, 1, 4);
  // 下面这种也可以拿到slice
  var newArray3 = [].slice.call(arguments, 1, 4);

  // 2.3 es6的语法
  var newArray4 = Array.from();
  console.log(newArray4);
  var newArray5 = [...arguments];
}

console.log(foo(10, 20, 30, 40, 50));

// 补充

// Array中的slice实现 slice原理
// Array.prototype.hyslice = function (start, end) {
//   // 拿到aruguments,方式是通过绑定this
//   var arr = this;
//   start = start || 0;
//   end = end || arr.length;
//   var newArray = [];
//   for (var i = start; i < end; i++) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// };

// var newArray = Array.prototype.hyslice.call(["asd", "qwe", "zzz"], 1, 3);
// console.log(newArray);
