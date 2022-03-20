// 发现是hello world类型
// 这叫做字面量类型
const message = "Hello World"

let num: 123 = 123


// 字面量类型的意义，就是必须结合联合类型
// 和枚举类型有点像，将值限定到某些具体的值
type Alignment = 'left' | 'right' | 'center'
let align: Alignment = 'left'
align = 'right'
align = 'center'