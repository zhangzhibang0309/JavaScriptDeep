// ES6
// https://promiseaplus.com

// new HYPromise((aaa, resolve, bbb, reject) => {});

// 实现ZBPromise
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECT = "reject";

class ZBPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED;
        this.value = value;
        console.log("resolve被调用");
      }
    };

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECT;
        this.reason = reason;
        console.log("reject被调用");
      }
    };

    executor(resolve, reject);
  }

}

const promise = new ZBPromise((resolve, reject) => {
  console.log("状态pending");

  resolve("resolve");
  reject("reject");
});
