class Person {
    protected name: string = "zzb"
}

class Student extends Person {
    getName() {
        return this.name
    }
}

const stu = new Student()
console.log(stu.getName())

export { }