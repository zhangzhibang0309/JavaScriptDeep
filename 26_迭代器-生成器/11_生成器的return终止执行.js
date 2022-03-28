function* foo(num) {
  console.log("函数开始执行~");

  const value1 = 100 * num;
  console.log(value1);
  const n = yield value1;

  const value2 = 200 * n;
  console.log(value2);
  const count = yield value2;

  const value3 = 300 * count;
  console.log(value3);
  yield value3;

  console.log("函数执行结束~");
  return "000";
}

// 1.生成器传参方式
const generator = foo(7);
console.log(generator.next());
// 第二段代码 使用了return
// 那么就相当于在第一段代码后面加上了return，会提前种植生成器函数带的 
console.log(generator.return(10));
// // 第三段代码
// console.log(generator.next(25));
