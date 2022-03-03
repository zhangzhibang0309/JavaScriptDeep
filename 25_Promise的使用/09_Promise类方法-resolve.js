// 转成Promise对象
// function foo() {
//   const obj = {
//     name: "zzb",
//   };

//   return new Promise((resolve) => {
//     resolve(obj);
//   });
// }

// foo().then(res => {
//     console.log("res:",res)
// })

// 类方法Promise.resolve
// 1.普通的值
// const promise = Promise.resolve({ name: "zzb" });
// 相当于
// const promise = new Promise((resolve) => {
//   resolve({ name: "zzb" });
// });

// promise.then((res) => {
//   console.log("res:", res);
// });

// 2.传入Promise
const promise = Promise.resolve(
  new Promise((resolve, reject) => {
    resolve("resolve message");
  })
);

promise.then((res) => {
  console.log("res:", res);
});
