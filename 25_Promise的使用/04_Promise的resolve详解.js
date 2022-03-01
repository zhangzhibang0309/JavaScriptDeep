new Promise((resolve, reject) => {
  // exectutor

  // pending阶段 待定/悬而未决的
  console.log("_____");

  resolve();// fulfilled(resolved)阶段 已敲定/兑现状态
  
  // reject();// rejected阶段 已拒绝状态
}).then(
  (res) => {
    console.log("res:", res);
  },
  (err) => {
    console.log("err:", err);
  }
);
