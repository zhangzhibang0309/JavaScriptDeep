// name和age虽然没有使用属性描述符来定义，但是他们也是有对应的特性的
// value: 赋值的value
// configurable: true
// enumerable: true
// writable: true
var obj = {
  name: "zzb",
  age: 18,
};

// 数据属性描述符
Object.defineProperty(obj, "address", {
  value: "北京市",
  // 使属性是否可以删除/可以重新定义属性描述符
  configurable: false, // 默认值是false
  // 该特性配置该属性是否可以被遍历出来
  enumerable: false, // 默认值是false
  // 该特性配置属性是否可以写入
  writable: false, // 默认值是false
});

// 测试configurable的作用 -- 不可删除/不可重新定义属性描述符
// delete obj.name
// console.log(obj.name)
// 因为是不可配置的 所以这个删除不会生效 但是非严格模式下不会报错
// delete obj.address // 静默错误
// console.log(obj.address)
// 这个也是不被允许的 直接报错
// Object.defineProperty(obj,"address",{
//     value: "上海市",
//     configurable: true
// })

// 测试enumerable的作用 -- 决定该属性是否可以枚举
// console.log(obj);
// for (var key in obj) {
//   console.log(key);
// }
// console.log(Object.keys(obj));

// 测试Writable的作用
obj.address = "上海市"; // 不能生效 静默错误
console.log(obj.address);
