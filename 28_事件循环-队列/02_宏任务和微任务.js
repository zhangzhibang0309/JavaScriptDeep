setTimeout(() => {}, 1000);

queueMicrotask(() => {
  console.log("queueMicrotask");
});

Promise.resolve().then(() => {
    console.log("Promise then")
})

// 在js线程里面，先调用的都是在最顶层的代码
// 上面这些会被添加到宏任务微任务队列
// 下面这些被称为main script 在主线程中 会直接调用
function foo() {
    console.log("foo")
}
function bar() {
    console.log("bar")
    foo()
}
bar()
console.log("其他代码")

// 规范：main script是最先执行的，在执行任何一个的宏任务之前，都会检查一下， 保证微任务队列已经被清空
// 宏任务队列macrotask queue：定时器 ajax DOM UI-Rending
// 微任务队列microtask queue：queu eMicrotask Promise-then MutationObser的API