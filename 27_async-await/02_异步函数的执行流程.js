async function foo() {
    console.log("foo function start")

    console.log("执行代码~")
    console.log("执行代码~")
    console.log("执行代码~")

    console.log("foo function end")
}

// async默认执行和普通函数一样的
console.log("script start")
foo()
console.log("script end")