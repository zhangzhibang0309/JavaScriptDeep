class Person {
    // 属性必须初识化，可以直接初识化，可以在构造器里面初识化
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    eating() {
        console.log(this.name + "eating")
    }
}

const p = new Person("zzb", 18)
console.log(p.name)
console.log(p.age)

export { }