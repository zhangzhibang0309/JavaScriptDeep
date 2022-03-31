// 使用另外一个模块导出的对象，用require
// const zzb = require("./zzb.js");
// 解构
const { name, age, sum } = require("./zzb.js");

console.log(name);
console.log(age);
console.log(sum(1, 2));
