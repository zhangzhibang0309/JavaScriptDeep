// interface是可以重复的

// interface IFoo {
//     name: string
// }

// interface IFoo {
//     age: number
// }

// // 合并接口
// const foo: IFoo = {
//     age: 10,
//     name: "a"
// }

document.getElementById("app") as HTMLDivElement
window.addEventListener

interface Window {
    age: number
}
window.age = 19
console.log(window.age)


// type是不能重复的
// type IBar = {
//     name: string,
//     age: number
// }

// type IBar = {
//     asd: string,
// }