// 普通的import还是同步的
// import { name, age } from "./foo.js";
// console.log(name)

// 使用import函数，它就成为异步加载了
// import函数返回的结果是一个Promise
import("./foo.js").then((res) => {
  console.log("res:", res.name);
});

// 这里还有个ES11新增的特性
// meta属性本身也是一个对象：{ url: "当前模块所在的路径"}
console.log(import.meta);
