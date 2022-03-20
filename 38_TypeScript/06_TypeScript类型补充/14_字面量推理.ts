

type Method = 'GET' | 'POST'
function request(url: string, method: Method) {

}

// 法1
type Request = {
    url: string
    method: Method
}
 
const options: Request = {
    url: "baidu.com",
    method: 'POST'
}

// 因为第二个参数是字面量参数，但是options里面自动推导是string，所以用到as
request(options.url, options.method)


// 法2
// const options = {
//     url: "baidu.com",
//     method: 'POST'
// }

// // 因为第二个参数是字面量参数，但是options里面自动推导是string，所以用到as
// request(options.url, options.method as Method)

// 法3
// const options = {
//     url: "baidu.com",
//     method: 'POST'
// } as const // 直接在这里as一下 会自动推到为字面量类型

// request(options.url, options.method)

export {}