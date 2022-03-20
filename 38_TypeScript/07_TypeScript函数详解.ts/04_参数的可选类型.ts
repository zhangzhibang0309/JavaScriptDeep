// 可选类型必须写在必选类型后面
// y -> undefined | number
function foo(c: number, y?: number) {

}

foo(20, 30)
foo(20)

export { }