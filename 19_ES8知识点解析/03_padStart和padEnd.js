const message = "Hello World";

// 基本使用
console.log("基本使用")
const newMessage = message.padStart(15, "*").padEnd(20, "-");
console.log(newMessage);

// 案例
console.log("案例");
const cardNumber = "123216734582175367215367"
const lastFourCard = cardNumber.slice(-4)