// 1.setItem
localStorage.setItem("name","zzb")
localStorage.setItem("age",18)

// 2.length属性
console.log(localStorage.length)
for(let i = 0;i < localStorage.length;i++) {
    const key = localStorage.key(i)
    console.log(localStorage.getItem(key))
}

// 3.key方法
console.log(localStorage.key(0))

// 4.getItem方法（key）
console.log(localStorage.getItem("age"))

// 5.removeItem
localStorage.removeItem("age")

// 6.clear
localStorage.clear()