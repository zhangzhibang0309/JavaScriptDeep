console.log("script start");

// 业务代码
// setTimeout本身同步 里面的回调函数是异步函数
// 回调函数会被加入宏任务队列  
setTimeout(() => {});
console.log("后续代码 ");

console.log("script end");
