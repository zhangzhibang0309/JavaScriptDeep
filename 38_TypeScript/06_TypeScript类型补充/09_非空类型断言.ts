// message? -> undefined | string
function printfMessageLength(message?: string) {
    // if (message) {
    //     console.log(message.length)
    // }

    // 保证message非空
    console.log(message!.length)
}

printfMessageLength("Hello World")
printfMessageLength("哈哈哈哈")

// 所以这里就不要不传值了
// printfMessageLength()