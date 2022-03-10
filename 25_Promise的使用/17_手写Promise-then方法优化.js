// 本次迭代优化： 
//    1.首先用数组存储所有的回调方法，来解决多个then的调用
//    2.通过判断现在处于的状态解决异步延迟调用then

const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECT = "reject";

class ZBPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          this.onFulfilledFns.forEach((fn) => {
            fn(this.value);
          });
        });
      }
    };

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          this.status = PROMISE_STATUS_REJECT;
          this.reason = reason;
          this.onRejectedFns.forEach((fn) => {
            fn(this.reason);
          });
        });
      }
    };

    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    if (this.status === PROMISE_STATUS_FULFILLED) onFulfilled(this.value);

    if (this.status === PROMISE_STATUS_REJECT) onRejected(this.reason);

    if (this.status === PROMISE_STATUS_PENDING) {
      this.onFulfilledFns.push(onFulfilled)
      this.onRejectedFns.push(onRejected)
    }
  }
}

const promise = new ZBPromise((resolve, reject) => {
  resolve("resolve");
  reject("reject");
});

promise.then(
  (res) => {
    console.log("res1", res);
  },
  (err) => {
    console.log(err);
  }
);

promise.then(
  (res) => {
    console.log("res2", res);
  },
  (err) => {
    console.log(err);
  }
);

setTimeout(() => {
  promise.then(
    (res) => {
      console.log("resSetTimeout", res);
    },
    (err) => {
      console.log("errSetTimeout",err);
    }
  );
}, 1000);
