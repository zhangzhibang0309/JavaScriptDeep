// number|string 联合类型
function printID(id: number|string|boolean) {
    // 使用联合类型的值时，需要特别小心
    // narrow：缩小
    if(typeof id === 'string') {
        console.log(id.toUpperCase())
    }else {
        console.log(id)
    }
}

printID(123)
printID("asd")
printID(true)