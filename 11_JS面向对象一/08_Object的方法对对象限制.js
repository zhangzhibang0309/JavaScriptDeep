var obj = {
  name: "zzb",
  age: 18,
};

// 1.禁止对象继续添加新的属性
Object.preventExtensions(obj);

// 已经阻止 下面静默错误
obj.height = 1.88;
obj.address = "广州市";

console.log(obj);


// 2.禁止对象配置 删除里面的属性
Object.seal(obj)
delete obj.name
console.log(obj.name)


// 3.让属性不能修改（writable: false）
Object.freeze(obj)
obj.name = 'kobe'
console.log(obj.name)