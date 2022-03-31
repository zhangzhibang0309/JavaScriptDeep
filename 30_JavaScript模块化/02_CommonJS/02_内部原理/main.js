const zzb = require("./zzb.js");

console.log(zzb);

// 在1000ms前，zzb模块把name改掉了，这里输出也改掉了
// 说明这里拿到的就是zzb模块对象的引用
setTimeout(() => {
  console.log(zzb);
}, 2000);
