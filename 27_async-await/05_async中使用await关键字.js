// 1.await后面跟表达式
function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(222);
      reject("err");
    }, 2000);
  });
}

// async function foo() {
//   const res = await requestData();
//   console.log("后面得代码", res);
//   console.log("后面得代码");
//   console.log("后面得代码");

//   const res2 = await requestData();
//   console.log("res2后面得代码", res);
// }

// 2.跟上其他的值
// async function foo() {
//   const res1 = await 123;

//   const res1 = await {
//     then(resolve, reject) {
//       resolve("abc");
//     },
//   };

//   const res1 = await new Promise((resolve) => {
//     resolve("zzb");
//   });

//   console.log("res1", res1);
// }

// 3.reject值
async function foo() {
  const res1 = await requestData();
  console.log("res1:", res1);
}

// 返回的是个promise，但是正常情况下我们就不用写then了，直接在函数里面await后面直接写就完了
// 但是如果抛出异常了，那就还是需要catch一下
foo().catch((err) => {
  console.log(err);
});
