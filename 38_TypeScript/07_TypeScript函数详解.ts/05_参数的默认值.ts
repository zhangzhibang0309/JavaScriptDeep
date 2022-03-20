// 最好默认值写在后面
// 参数的顺序：必选参数 - 有默认值的参数 - 可选参数
function foo(x: number = 100, y: number) {
    console.log(x, y)
}

foo(undefined, 200)