var obj = {
  name: "zzb",
  age: 18,
  height: 1.88,
};

// 对象的解构： {}
// 无关顺序 和 数量
var { name, height, age } = obj;
console.log(name, age, height);

var { age } = obj;
console.log(age);

// 可以给解构出来的变量换名字
var { name: newName } = obj;
console.log(newName);

// 可以解构出对象中没有的属性并给其赋值
var { address: newAddress = "北京市" } = obj;
console.log(newAddress);
console.log(obj); // 并不会影响原对象
