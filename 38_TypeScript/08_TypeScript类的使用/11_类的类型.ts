class Person {
    name: string = "123"

    eating() {

    }
}

const p = new Person()

// 类作为类型
const p1: Person = {
    name: "aaa",
    eating() {

    }
}