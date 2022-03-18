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
          if (this.status !== PROMISE_STATUS_PENDING) return;
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
          if (this.status !== PROMISE_STATUS_PENDING) return;
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
    if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled)
      onFulfilled(this.value);

    if (this.status === PROMISE_STATUS_REJECT && onRejected)
      onRejected(this.reason);

    if (this.status === PROMISE_STATUS_PENDING) {
      this.onFulfilledFns.push(onFulfilled);
      this.onRejectedFns.push(onRejected);
    }
  }
}

const promise = new ZBPromise((resolve, reject) => {
  // 目前的实现其实是有很大问题的，现在resolve和reject可以同时生效
  // 主要原因就是我们把状态的变更操作拿到了微任务队列里面，第一事件不会变更状态
  // 所以resolve reject 会一直执行

  // 然后我们想了一个办法
  // if (this.status !== PROMISE_STATUS_PENDING) return;
  resolve("resolve");
  reject("reject");
});

promise.then(
  (res) => {
    console.log("res1", res);
  },
  (err) => {
    console.log("err1", err);
  }
);

promise.then(
  (res) => {
    console.log("res2", res);
  },
  (err) => {
    console.log("err2", err);
  }
);

setTimeout(() => {
  promise.then(
    (res) => {
      console.log("resSetTimeout", res);
    },
    (err) => {
      console.log("errSetTimeout", err);
    }
  );
}, 1000);

console.log(1);
