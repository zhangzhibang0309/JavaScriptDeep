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
        queueMicrotask(() => {
          this.value = value;
          this.onFulfilled(this.value);
        });
      }
    };

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECT;
        queueMicrotask(() => {
          this.reason = reason;
          this.onRejected(this.reason);
        });
      }
    };

    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
  }
}

const promise = new ZBPromise((resolve, reject) => {
  console.log("状态pending");

  resolve("resolve");
  reject("reject");
});

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);


// 这是一个最基本的then方法的实现
// 问题：
//    1.现在then只能有一个，因为this.onFulfilled在最后一次then调用的时候之前的值被覆盖了，如果想要实现多个可以把这些函数放到一个数组