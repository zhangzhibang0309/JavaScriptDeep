// request.js
function requestData(url) {
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      // 拿到请求的结果
      // url传入的是zzb 请求成功
      if (url === "zzb") {
        // success

        // 拿到要返回的数据
        let names = ["abc", "cba", "qwe"];
        resolve(names);
      } else {
        // failure

        let errMessage = "请求失败，url错误";
        reject(errMessage);
      }
    }, 3000);
  });
}

// main.js
const promise = requestData("zzb");
promise.then(
  // 成功回调
  (res) => {
    console.log(res);
  },
  // 失败回调
  (err) => {
    console.log(err);
  }
);
