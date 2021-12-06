// 给所有的函数添加一个hycall方法
Function.prototype.hycall = function (thisArg, ...args) {
  // 1.获取到哪一个函数执行了hycall
  var fn = this;

  // 2.对thisArg转成对象类型（防止它传入的是非对象类型）
  thisArg = thisArg ? Object(thisArg) : window;

  // 3.调用需要被执行的函数
  thisArg.fn = fn;
  var result = thisArg.fn(...args);
  delete thisArg.fn;

  // 4.将最终的结果返回出去
  return result;
};

function foo(num1, num2) {
  console.log("foo函数被执行", this);
}

function sum(num1, num2) {
  console.log("sum函数被执行", this, num1, num2);
  return num1 + num2;
}

//系统的函数的call方法
// foo.call(123);
// foo.call({ name: "zzb" });
// foo.call(null);
// foo.call(undefined);

// 自己实现的hycall方法
// foo.hycall(123);
// foo.hycall({ name: "zzb" });
// foo.hycall(null);
// foo.hycall(undefined);
var res = sum.hycall("abc", 100, 200);
console.log(res);
// sum.hycall();
