function* foo(num) {
  console.log("函数开始执行~");

  const value1 = 100 * num;
  console.log(value1);
  try {
    yield value1;
  } catch (err) {
    console.log("捕获异常：", err);
  }

  console.log("第二段代码继续执行");
  const value2 = 200;
  console.log(value2);
  const count = yield value2;

  const value3 = 300 * count;
  console.log(value3);
  yield value3;

  console.log("函数执行结束~");
  return "000";
}

const generator = foo(7);
const result = generator.next();
// 第二段代码
if (result.value !== 200) console.log(generator.throw("error message"));
