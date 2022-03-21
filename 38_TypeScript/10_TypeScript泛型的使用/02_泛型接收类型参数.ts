// 泛型 就是将类型参数化

function foo<T, E>(arg1: T, arg2: E) {
    console.log(arg1, arg2)
}

foo<number, string>(10, "asd")