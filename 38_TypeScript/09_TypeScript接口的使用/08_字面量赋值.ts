interface IPerson {
    name: string,
    age: number,
    height: number
}


// 字面量创建会报错
// const p: IPerson = {
//     name: "zzz",
//     age: 18,
//     height: 1.88,
//     address: "广州市"
// }

// 分开就不会报错
const info = {
    name: "zzz",
    age: 18,
    height: 1.88,
    address: "广州市"
}
const p: IPerson = info
console.log(p, info)



// 使用场景
function printInfo(person: IPerson) {
    console.log(person)
}
// 报错
// printInfo({
//     name: "zzz",
//     age: 18,
//     height: 1.88,
//     address: "广州市"
// })
// 不报错
const info2 = {
    name: "zzz",
    age: 18,
    height: 1.88,
    address: "广州市"
}
printInfo(info2)