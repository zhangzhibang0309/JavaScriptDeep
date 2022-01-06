var obj = {
  name: "zzb",
  age: 18,
};

var info = Object.create(obj, {
  address: {
    value: "北京市",
    enumerable: true,
  },
});

console.log(info); // { address: '北京市' }
console.log(info.__proto__);

// 判断是不是自己的属性hasOwnProperty
console.log(info.hasOwnProperty("address")); // true
console.log(info.hasOwnProperty("name")); // false

//  in操作符判断 无论是再对象身上还是原型上都可以
console.log("address" in info); // true
console.log("name" in info); // true

// instanceof 用域检测构造函数的prototypr，是否出现在某个实例对象的原型链上

