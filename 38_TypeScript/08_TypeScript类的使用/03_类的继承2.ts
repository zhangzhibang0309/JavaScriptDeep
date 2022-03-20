class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    eating() {
        console.log("eating")
    }
}

class Student extends Person {
    sno: number

    constructor(name: string, age: number, sno: number) {
        super(name, age)
        this.sno = sno
    }

    // 重写
    eating() {
        // 调用父类方法
        super.eating()
        console.log("eating overwrite")
    }

    studying() {
        console.log("studying")
    }
}


const stu = new Student("zzb", 18, 119)
stu.name = "coderwhy"
stu.age = 10
console.log(stu.name, stu.age)
stu.eating()

export { }