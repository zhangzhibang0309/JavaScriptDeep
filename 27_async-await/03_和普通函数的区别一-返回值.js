async function foo() {
  console.log("foo start");
  console.log("foo end");

  // 返回一个值
  //   return "abc";

  // 返回thenable
  //   return {
  //       then(resolve,reject) {
  //           resolve("hhh")
  //       }
  //   }

  // 返回promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hhh");
    }, 2000);
  });
}

// 异步函数的返回值一定是一个Promise
const promise = foo();
console.log(promise);
promise.then((res) => {
  console.log("promise then function exec", res);
});
