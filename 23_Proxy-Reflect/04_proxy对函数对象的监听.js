function foo(s1, s2) {
  console.log(s1, s2);
}

const fooProxy = new Proxy(foo, {
  /**
   *
   * @param {*} target
   * @param {*} thisArg
   * @param {*} argArray
   */
  apply(target, thisArg, argArray) {
    console.log("对foo函数进行了apply调用");
    target.apply(thisArg, argArray);
  },
  /**
   * 监听new调用
   *
   * @param {*} target
   * @param {*} argArray
   * @param {*} newTarget
   */
  construct(target, argArray) {
    console.log("对foo函数进行了new调用");
    return new target(...argArray);
  },
});

// 触发监听 必须要使用代理对象
fooProxy.apply({}, ["abc", "asd"]);
new fooProxy("abc", "cba");
