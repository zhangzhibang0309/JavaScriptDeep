function foo() {
    return "foo"
}

function bar() {
    return 123
}

let flag = true

// 这里不确定result类型，但是不建议用any
// unknown类型只能赋值给any和unknown类型
// any类型可以赋值给任意类型
let result: unknown

if (flag) result = foo()
else result = bar()


// result是unknown类型，赋值一次之后，类型就确定了，所以会报错
// 如果用any的话就可以任意赋值
// let message: string = result
// let num: number = result


export { }