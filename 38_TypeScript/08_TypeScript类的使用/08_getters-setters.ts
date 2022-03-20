class Person {
    private _name: string
    constructor(name: string) {
        this.name = name
    }

    // 访问器setter/getter
    set name(newName) {
        this._name = newName
    }
    get name() {
        return this._name
    }
}

const p = new Person("zzb")
p.name = "kove"
console.log(p.name)