// 响应式
let m = 100
//  一段代码
console.log(m)
console.log(m * 2)
console.log(m ** 2)
// 当m值改成200时，上面这三行代码都要执行，这就是响应式
m = 200


// 对象的响应式
const obj = {
  name: "zzb",
  age: 18,
};
// 响应式就是 上面对象某个属性发生变化时，相关依赖代码都要重新执行
// 比如name发生变化，下面的console.log(obj.name)就会执行
console.log(obj.name);
console.log(obj.age);
