class Person {
    private name: string = "zzb"

    getName() {
        return this.name
    }
    setName(newName) {
        this.name = newName
    }
}

const p = new Person()
// private 不能赋值 不能取值
// p.name = 2
// console.log(p.name)
console.log(p.getName()) // 只能通过get set函数

export { }