var obj = {
  name: "zzb",
  age: 18,
};

// [[get]]操作
// 1. 在当前的对象中查找属性
// 2. 如果没有找到，这个时候回去愿你选哪个(__proto__)对象上查找
// 3.
obj.__proto__ = {};
obj.__proto__.__proto__ = {};
obj.__proto__.__proto__.__proto__ = {
  address: "北京市",
};
console.log(obj.address); // 北京市
