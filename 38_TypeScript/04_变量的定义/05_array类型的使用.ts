// 确定一个事实：names是一个数组类型，但是数组中存放的是什么类型的元素呢？

// 类型注解：type annotation
const names1: Array<string> = [] // 不推荐(因为jsx是有冲突的<div></div>)

const names2: string[] = [] // 推荐这种写法

names1.push("abc")
names2.push("qwe")

// 数组中存放不同类型是不好的习惯
console.log(names1, names2)