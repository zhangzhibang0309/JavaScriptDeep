// 1. ||= 逻辑或赋值运算
// let message = undefined;
// message = message || "default value";
// message ||= "default value";

// 2. &&=
// &&
// let obj = {
//   name: "zzb",
//   foo() {
//     console.log("foo");
//   },
// };
// obj.foo && obj.foo();
// &&=
// let info = {
//     name: "zzb"
// }
// info &&= info.name
// console.log(info) // info.name

// 3. ??=
let message = 0;
message = message || "default value";
message ||= "default value";