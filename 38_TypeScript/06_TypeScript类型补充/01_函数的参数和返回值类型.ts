// 给参数加类型注解
// 给返回值加类型注解
// 在开发中，通常不写返回值类型，会自动推导
function sum(num1: number, num2: number): number {
    return num1 + num2
}

// 对参数类型和个数做限制
// sum(123)