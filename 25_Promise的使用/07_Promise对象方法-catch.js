// const promise = new Promise((resolve, reject) => {
//   resolve("aaaa");
//   //   写法一：
//   //   reject("rejected status");

//   // 写法二：
//   //   throw new Error("rejected status");
// });

// 1.当executor抛出异常时，也是会调用错误（拒绝）捕获的回调函数的
// promise.then(
//   (res) => {},
//   (err) => {
//     console.log("err:", err);
//     console.log("----");
//   }
// );

// 2.通过catch方法来传入错误（拒绝）捕获的回调函数
// promise/a+规范
// promise.catch((err) => {
//   console.log("err:", err);
// });
// promise
//   .then((res) => {
//     return new Promise((resolve, reject) => {
//       // 写法一：
//       //   reject("then reject status");
//       // 写法二：
//       throw new Error("rejected status");
//     });
//   })
//   .catch((err) => {
//     console.log("err:", err);
//     console.log("-----");
//   });

// 3.拒绝捕获的问题（前面课程）
// promise.then(
//   (res) => {},
//   (err) => {}
// );

// const promise = new Promise((resolve, reject) => {
//   reject("11111");
// });

// // 这样写node是不行的，不知道then怎么处理
// promise.then((res) => {});
// promise.catch((err) => {});

// 4.catch的返回值
const promise = new Promise((resolve, reject) => {
  reject("err1");
});

promise
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);

    // 这里是return的普通数据 在内部会new Promise直接resolve 所以会走下面的then
    return "err1 return";
  })
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
