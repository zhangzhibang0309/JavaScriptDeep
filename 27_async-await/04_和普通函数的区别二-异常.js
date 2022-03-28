async function foo() {
  console.log("foo start");

  console.log("中间代码~");
  // 异步函数中的异常，会被作为异步函数返回的Promise的reject值得
  throw new Error("error message");

  console.log("foo end");
}

// 异步函数的返回值一定是一个Promise
foo().catch((err) => {
  console.log(err);
});
console.log("后续还有代码~~~~~");
