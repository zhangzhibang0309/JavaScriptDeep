// 返回值为void，就是可以不返回，或者返回null undefined
// 但是void我们一般不写,自动推导返回类型
function sum(num1: number, num2: number): void {
    console.log(num1 + num2)

    return undefined
}

sum(20, 30)
// sum("abc", "qwe")