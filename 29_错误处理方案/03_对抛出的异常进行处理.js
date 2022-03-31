function foo() { 
  throw new Error("foo error message~");
}

function bar() {
  try {
    foo();
  } catch (err) {
    console.log(err.message);
  } finally {
      console.log("finally代码执行")
  }
}
function test() {
  bar();
}
function demo() {
  test();
}

demo();
console.log("后续");
// 两种处理方法：
// 1.第一种是不处理，那么异常会一步步的抛出，知道最顶层的调用
//   如果到最顶层都没有处理，程序终止，后续代码不会执行，并且报错
// foo()

// 2。使用try catch捕获异常
