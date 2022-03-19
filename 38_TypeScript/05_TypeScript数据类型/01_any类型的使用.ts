// 当进行一些类型断言 as any
// 在我们不想给某些JavaScript添加具体的数据类型时（就像原生的JavaScript代码一样）
let message: any = "Hello World"
message = 123
message = "abc"
message = {}

console.log(message)

// 这个并不推荐
// 数组最好是唯一类型
const arr: any[] = []