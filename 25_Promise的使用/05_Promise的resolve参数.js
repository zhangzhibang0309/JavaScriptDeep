/**
 * resolve（参数）
 *  1> 普通的值或者对象
 *      很简单，正常使用
 *  2> 传入一个Promise
 *      那么当前的Promise的状态会由传入的Promise来决定
 *  3>传入一个对象，并且这个对象有then方法（thenable）
 *      那么也会执行该then方法，并且由该then方法决定后续状态
 */

// 1.传入promise的特殊情况
// const newPromise = new Promise((resolve, reject) => {
//   //   resolve("res message");
//   reject("err message");
// });

// new Promise((resolve, reject) => {
//   // 这里智能用resolve进入下一个阶段 但是实际的状态是由传入的promise决定的
//   resolve(newPromise);
// }).then(
//   (res) => {
//     console.log("res", res);
//   },
//   (err) => {
//     console.log("err", err);
//   }
// );

// 2传入
const newPromise = new Promise((resolve, reject) => {
  // pending -> fulfilled
  const obj = {
    then(resolve, reject) {
      //   resolve("resolve message");
      reject("reject message");
    },
  };

  // 实际状态由上面obj.then决定
  resolve(obj);
}).then(
  (res) => {
    console.log("res", res);
  },
  (err) => {
    console.log("err", err);
  }
);

// 下面这种叫做 实现了eatable接口
// 上面的 就叫实现了thenable接口
const obj2 = {
  eat() {},
};
