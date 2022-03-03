// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222);
  }, 500);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333);
  }, 3000);
});

// any方法 -- node14不支持
// 至少有一个resolve才会执行then
// 如果没有resolve，全部rejected之后会到catch
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    //   后面的参数可以拿到所有的rejected参数
    console.log("err", err.errors);
  });
