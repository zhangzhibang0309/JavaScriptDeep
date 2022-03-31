class HYError {
  constructor(errorCode, errorMessage) {
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
  }
}

function foo(type) {
  console.log("foo函数开始执行");

  if (type === 0) {
    // 1.抛出一个字符串类型（基本的数据类型）
    // throw "type不能为0";

    // 2.比较常见的是抛出一个对象类型
    // throw { errorCode: -1001, errorMessage: "type不能为0~" };

    // 3.创建类，并且创建这个类对象的随想
    // throw new HYError(-1001, "type不能为0~");

    // 4.默认js提供了一个Error类
    // const err = throw new Error("type不能为0~");
    // const err = new Error("type不能为0~");
    // console.log(err.message);
    // console.log(err.name);
    // console.log(err.stack);

    // 5.Error的子类 TypeError RangeError等等
    const err = new TypeError("当前type错误");
    throw err;

    // 强调
    // return 和 throw之后后续代码都不会继续执行了
  }

  console.log("foo函数结束执行");
}
foo(0);
console.log("后续代码~");

// function test() {
//   console.log("test function");
// }
// function demo() {
//   test();
// }
// function bar() {
//   demo();
// }
// bar();
