function foo(message: string) {

}

const names: string[] = ["abc", "qwe", "asd"]
// 这种情况下可以自动推导
names.forEach(item => {
    console.log(item.split(""))
})