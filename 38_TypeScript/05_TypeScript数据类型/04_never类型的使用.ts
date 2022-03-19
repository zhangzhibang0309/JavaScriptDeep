function foo(): never {
    // 死循环 永远无返回值
    while (true) { }
}

function bar(): never {
    throw new Error()
}

//知乎：never到底有什么应用场景
function handleMessage(message: string | number | boolean) {
    switch (typeof message) {
        case 'string':
            console.log("string处理方式处理message")
            break
        case 'number':
            console.log("number处理方式处理message")
            break
        case 'boolean':
            console.log("boolean")
            break
        default:
            // 永远不可能有这句代码的执行
            const check: never = message
    }
}

handleMessage(123)
handleMessage("abc")

handleMessage(true)// 用true，那么上面就要加上boolean类型，加上default，就不会让你忘记对boolean类型的情况进行处理