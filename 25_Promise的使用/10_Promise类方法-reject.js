// const promise = Promise.reject("reject message");
// 相当于
// const promise = new Promise((resolve, reject) => {
//   reject("rejected message");
// });

// 使用reject的话，传入什么都是一样的，都会来到reject
const promise = Promise.reject("reject message");
// const promise = Promise.reject(new Promise(() => {}));

promise
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
