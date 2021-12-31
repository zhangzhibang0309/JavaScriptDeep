var obj = {
  name: "zzb",
  age: 18,
};

// 属性描述符是个对象
Object.defineProperty(obj, "height", {
  // 很多配置
  value: 1.88,
});

console.log(obj);
console.log(obj.height)

// 描述符氛围数据属性描述符 和 存取属性描述符