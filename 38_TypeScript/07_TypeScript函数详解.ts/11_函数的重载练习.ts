// 实现方式一：联合类型实现
// function getLength(args: string | any[]) {
//     return args.length
// }

// console.log(getLength("abc"))
// console.log(getLength([1, 2, 3]))

// 实现方式二：函数的重载
function getLength(args: string): number;
function getLength(args: any[]): number;

function getLength(args: any): number {
    return args.length
}
console.log(getLength("abc"))
console.log(getLength([1, 2, 3]))

// 如果能用联合类型简单方便的实现，优先用联合类型
// 如果联合类型实现很麻烦，那就用函数重载