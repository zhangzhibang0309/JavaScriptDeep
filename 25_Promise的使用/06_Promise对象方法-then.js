// Promise有哪些对象方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype));
// 主要有三个：
//      then
//      catch
//      finally

const promise = new Promise((resolve, reject) => {
  resolve("resolve");
});

// 1.同一个Promise可以被多次调用then方法
// 当我们的resolve方法被回调时，所有的then方法传入的回调函数都会被调用S
// promise.then((res) => {
//   console.log("res1:", res);
// });

// promise.then((res) => {
//   console.log("res1:", res);
// });

// promise.then((res) => {
//   console.log("res1:", res);
// });

// 2.then方法传入的回调函数是可以有返回值的
// then方法本身也十有返回值得，他的返回值是Promise
//  1> 如果我们返回的是一个普通值，那么这个普通的值会被作为一个新的Promise的resolve值
// promise
//   .then((res) => {
//     // return new Promise(resolve => {
//     //     resolve("aaaaa")
//     // })
//     // return普通值得时候，相当于上面一样，返回得是promise，并且调用了resolve
//     return "aaaaa";
//   })
//   // 这个then 是上面return时new得Promise下的then
//   // 这也是Promise能够链式调用的原因
//   .then((res) => {
//     // 这里的res就是上面得aaaaa
//     console.log(res);
//   });

//  2> 如果我们返回的是一个Promise
promise.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(11111);
    }, 3000);
  });
}).then(res => {
    console.log("res:",res)
});

//  3> 如果返回的是一个对象，并且该对象实现了thenable
promise.then(res => {
    return {
        then(resolve,reject) {
            resolve(22222)
        }
    }
}).then(res => {
    console.log("res:",res)
})
