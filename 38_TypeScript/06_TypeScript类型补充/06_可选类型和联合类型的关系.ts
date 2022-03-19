// 可选类型，本质是表示的这个参数是 类型|undefined的 联合类型
function foo(message?: string) {
    console.log(message)
}

foo(undefined)
foo("asd")
foo()// 不传相当于undefined