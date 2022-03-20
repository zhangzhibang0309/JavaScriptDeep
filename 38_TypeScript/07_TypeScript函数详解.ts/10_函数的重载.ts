// 函数的重载：函数的名称相同，但是参数不同的几个函数，就是函数的重载
function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;

function add(num1: any, num2: any): any {
    return num1 + num2
}

const result = add(20, 30)
const resultS = add("a", "b")

export { }