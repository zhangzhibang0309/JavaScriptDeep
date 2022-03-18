const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECT = "reject";

// 工具函数
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value);
    resolve(result);
  } catch (err) {
    reject(err);
  }
}

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

    try {
      executor(resolve, reject);
    } catch (err) {
      console.log(err);
    }
  }

  then(onFulfilled, onRejected) {
    onRejected = onRejected || (err => {throw err})

    return new ZBPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject);
      }

      if (this.status === PROMISE_STATUS_REJECT && onRejected) {
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject);
      }

      if (this.status === PROMISE_STATUS_PENDING) {
        if (onFulfilled)
          this.onFulfilledFns.push(() =>
            execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
          );
        if (onRejected)
          this.onRejectedFns.push(() =>
            execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
          );
      }
    });
  }

  catch(onRejected) {
    // 直接调用then，然后因为来到这儿一定是err，所以onFulfilled传入undefined
    this.then(undefined, onRejected);
  }
}

const promise = new ZBPromise((resolve, reject) => {
  console.log(222)
  
  // resolve("resolve");
  reject("reject");
});

// 实现链式调用
promise
  .then((res) => {
    console.log("res1", res);
  })
  .catch((err) => {
    console.log("err1", err);
  });
