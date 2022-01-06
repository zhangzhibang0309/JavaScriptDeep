function Person() {}

var p = new Person();

// 这样是判断Person的原型有没有出现在p的原型链上面
console.log(p instanceof Person);
// 这样是判断这个对象有没有出现在p的原型链上面
console.log(Person.prototype.isPrototypeOf(p));

// 使用场景
var obj = {
  name: "zzb",
  age: 18,
};
var info = Object.create(obj);
// console.log(info instanceof obj)// 报错 要求obj是个对象
// console.log(obj.isPrototypeOf(info)); //为什么是true??? obj这个位置本来就需要是个对象
