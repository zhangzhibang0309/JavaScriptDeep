function foo() {
  // Promise
  return new Promise((resolve, reject) => {
    // 这里面是可以传参的
    resolve("success message");
    // reject("failure message");
  });
}

// main.js
const fooPromise = foo();
fooPromise.then(
  // then方法传入两个回调函数
  // > 第一个回调函数，会在Promise执行resolve函数时，被回调
  // > 第二个回调函数，会在Promise执行reject函数时，被回调
  (res) => {
    console.log(res);
  },
  // catach方法传入的回调函数，会在Promise执行reject函数时，被回调
  (err) => {
    console.log(err);
  }
);

// promise callback实现就像上面那个对象一样
// 传入的这个函数，被成为executor
// > resolve
// const promise = new Promise((resolve, reject) => {
//   console.log("promise传入的函数被执行了");
//   resolve();
// });
// promise.then(
//   () => {},
//   () => {}
// );
