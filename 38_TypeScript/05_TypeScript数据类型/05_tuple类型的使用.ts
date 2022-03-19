// tuple元组： 多种元素的组合
// "zzb",18,1.88

// 用数组存储
// const info: any[] = ["zzb", 18, 1.88]
// 用对象存储
// const infoObj = {
//     name: "zzb",
//     age: 18,
//     height: 1.88
// }
// 用元组存储,可以准确的拿到每个元素的数据类型
const info: [string, number, number] = ["zzb", 18, 1.88]

const name = info[0]
console.log(info.length)


export { }