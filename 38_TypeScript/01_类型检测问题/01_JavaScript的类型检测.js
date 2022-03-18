// 当前foo函数，在被其他地方调用时，没有做任何的参数校验
// 1> 没有对类型进行校验
// 2> 没有对是否传入参数进行校验
function foo(message) {
    console.log(message,length)
}

foo("Hello World")
foo("你好啊 Fantasy")

foo()

// 报错代码下面永远执行不到
console.log("领域展开")