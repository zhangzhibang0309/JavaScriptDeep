class Person {
    readonly name: string = "123"
    age?: number
    readonly friend?: Person

    constructor(name: string, friend?: Person) {
        this.name = name
        this.friend = friend
    }
}

// 只读属性可以在构造器赋值，但是不能修改
const p = new Person("asd", new Person("Kobe"))
console.log(p)

// p.friend是只读的，但是却可以修改属性
if(p.friend) {
    p.friend.age = 100
}
console.log(p.friend)


export { }