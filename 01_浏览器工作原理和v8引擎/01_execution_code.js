var name = "zzb"

// 下面这行代码不会找不到 而是undefined 因为parse的时候已经进入globalObject了
console.log(result)

var num1 = 20
var num2 = 30
var result = num1 + num2

// 这种操作是正确的 以后再说为啥
foo()
function foo() {

}

/**
 * 1. parse的时候做的事情,v8会创建一个对象(GlobalObject -> go)
 * 2. 运行代码：
 *  2.1 v8为了执行代码，v8内部会有一个执行上下文栈（Execution Context Stack）（ECStack）（函数调用栈）
 *  2.2 为了全局代码能够正常执行，需要创建 全局执行上下文（Global Execution Context -> GEC）（全局代码需要执行的时候才会创建）
 */
var globalObject = {
    String: "类",
    Date: "类",
    setTimeout: "函数",
    window: globalObject,
    name: undefined, // parse的时候不会执行 所以没有值
    num1: undefined,
    num2: undefined,
    result: undefined
}

console.log(window.window.window)

