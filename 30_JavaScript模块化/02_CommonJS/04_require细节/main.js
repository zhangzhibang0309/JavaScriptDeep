// 情况一：核心模块
// const path = require("path");
// const fs = require("fs");
// path.resolve();
// path.extname();

// 情况二：路径
// 完整写法
// const  require("./foo.js")
// 无后缀名，先查找foo文件
// 没有的话会按照顺序加.js .json .node后缀名
// 如果还是没有就会将其当作一个目录依次查找index.js index.json index.node
// const abc = require("./abc")
// console.log(abc.name)

// 情况三：不是路径 也不是核心模块
// 会按照module.paths去查找对应文件
// 在对应路径里面的node_modules里面开始查找，还是按章上面加后缀 找文件夹的顺序去找
// const z = require("z");
console.log(module.paths);

// 最后 都没有找到 报错not found
