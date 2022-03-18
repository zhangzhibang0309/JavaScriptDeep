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
    return new ZBPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        // try {
        //   const value = onFulfilled(this.value);
        //   resolve(value);
        // } catch (err) {
        //   reject(err);
        // }
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject);
      }

      if (this.status === PROMISE_STATUS_REJECT && onRejected) {
        // try {
        //   const reason = onRejected(this.reason);
        //   resolve(reason);
        // } catch (err) {
        //   reject(err);
        // }
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject);
      }

      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns.push(() => {
          // try {
          //   const value = onFulfilled(this.value);
          //   resolve(value);
          // } catch (err) {
          //   reject(err);
          // }
          execFunctionWithCatchError(onFulfilled, this.value, resolve, reject);
        });
        this.onRejectedFns.push(() => {
          // try {
          //   const reason = onRejected(this.reason);
          //   resolve(reason);
          // } catch (err) {
          //   reject(err);
          // }
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject);
        });
      }
    });
  }
}

const promise = new ZBPromise((resolve, reject) => {
  // throw new Error("111");
  // resolve("resolve");
  reject("reject");
});

// 实现链式调用
promise
  .then(
    (res) => {
      console.log("res1", res);
      // return "11111";
      throw new Error("111");
    },
    (err) => {
      console.log("err1", err);

      // return "11err";
      throw new Error("111");

    }
  )
  .then(
    (res) => {
      console.log("res2", res);
      return "22222";
    },
    (err) => {
      console.log("err2", err);
    }
  );
