import { add, sub } from "./utils/math"
import { time, price } from "./utils/format"

// 使用axios 没有问题
// 原因 axios给我们写了类型声明文件.d.ts
import axios from "axios"

// 使用lodash 报错
// 原因 lodash没有类型声明文件.d.ts
// 解决办法一： 安装types下提供的.d.ts文件 -- 查询网站：
// 解决办法二： 自己写.d.ts
import loadsh from "lodash"


import xyql from "./imgs/37AC9AD78D6D2F689D839469AD61FB15.png"

console.log(add(20, 30))
console.log(sub(20, 30))

console.log(time.format("11111"))
console.log(price.format("123"))



// 下面是自己给自己写的js写的.d.ts声明文件
console.log(zzbName)
console.log(age)
console.log(zzbHeight)

zzbFoo()

const p = new Person("a", 18)