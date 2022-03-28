// request.js
function requestData(url, successCallback, failureCallback) {
  // 模拟网络请求
  setTimeout(() => {
    // 拿到请求的结果
    // url传入的是zzb 请求成功
    if (url === "zzb") {
      // success

      // 拿到要返回的数据
      let names = ["abc", "cba", "qwe"];
      successCallback(names);
    } else {
      // failure

      let errMessage = "请求失败，url错误";
      failureCallback(errMessage);
    }
  }, 3000);
}
