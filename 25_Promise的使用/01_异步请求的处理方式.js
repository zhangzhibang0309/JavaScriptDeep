/**
 * 这种回调的方式有很多的弊端:
 *  1> 如果是我们自己封装的requestData,那么我们在封装的时候必须要自己设计好callback名称, 并且使用好
 *  2> 如果我们使用的是别人封装的requestData或者一些第三方库, 那么我们必须去看别人的源码或者文档, 才知道它这个函数需要怎么去获取到结果
 */

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

// main.js
// 网络请求的话是异步，所以直接return你是没法用变量去接数据的，所以之前的时候都是传入一个回调函数在回调函数里面难道数据，去做一些事情
requestData(
  "zzb",
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

// 后来有了更好的方案，那就是Promise（规范了所有代码逻辑）
function requestData2() {
  return "承诺";
}
const chengnuo = requestData2();
