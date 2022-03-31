/**
 * 如果我们调用函数的时候，在调用这个函数时，如果出现了错误，那么我们应该是去修复这个错误
 */
function sum(num1, num2) {
  // 当传入的参数的类型不正确是，应该告知调用者一个错误
  if (typeof num1 !== "number" || typeof num2 !== "number") throw "parameters is error type~"

  return num1 + num2;
}

// 调用者
console.log(sum({ name: "zzb" }, true));
console.log(1)