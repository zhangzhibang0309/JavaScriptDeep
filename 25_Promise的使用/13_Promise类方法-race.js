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

// race: 竞技/竞赛
// 只要有一个Promise编程fulfilled，那么就结束
// 意外: 如果先遇到rejected，直接到catch里面
Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("res",res);
  })
  .catch((err) => {
    console.log("err",err);
  });
