// 类型别名
type Person = {
    name: string
    friend?: {
        name: string
        age?: number
    }
}

const info: Person = {
    name: "zzb",
    friend: {
        name: "kobe",
        // age: 18
    }
}

// 另一个文件中
console.log(info.name)
console.log(info?.friend?.name)