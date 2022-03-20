let message: string | null = null

const content = message ?? "你好啊李银河"
// 相当于下面
// const content = message ? message : "你好啊李银河"
console.log(content)

export { }