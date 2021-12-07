Function.prototype.hyapply = function (thisArg, argArray) {
  //1.获取到要执行的函数
  var fn = this;

  //2.处理绑定的thisArg
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  //3。执行函数
  thisArg.fn = fn;
  var result;
  // 解决无参方式一
  //   if (!argArray) result = thisArg.fn();
  //   else thisArg.fn(...argArray);
  // 解决无参方式二
  argArray = argArray ? argArray : [];

  result = thisArg.fn(...argArray);
  delete thisArg.fn;

  return result;
};

function sum(num1, num2) {
  console.log("sum被调用", this, num1, num2);
  return num1 + num2;
}

function foo(num) {
  console.log("foo被调用", this, num);
  return num;
}

function bar() {
  console.log("bar函数被执行", this);
}

// 系统调用
var result = sum.apply(0, [20, 30]);
// console.log(result);

// 自己实现的调用
// var result = sum.hyapply("abc", [20, 30]);
// console.log(result);

// foo.hyapply("abc",[20])
// bar.hyapply("abc");
// console.log(bar.hyapply("abc"));
