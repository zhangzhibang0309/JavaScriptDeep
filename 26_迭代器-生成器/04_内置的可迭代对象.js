const names = [1,2,3,4,5]
console.log(names[Symbol.iterator])

const iterator = names[Symbol.iterator]()
console.log(iterator.next().value)
console.log(iterator.next())
console.log(iterator.next())

for(let item of names) {
    console.log(item)
}

// 原生迭代对象有：String Array Map Set Arguments... 