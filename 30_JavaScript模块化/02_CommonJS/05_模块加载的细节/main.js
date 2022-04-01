console.log("mainjs开始运行")
// 第一次导入 被导入模块代码会运行一次
// 无论导入几次 都只运行一次 会做缓存
require("./foo")
require("./foo")
require("./foo")
console.log("mainjs后续运行")