var obj = {
  name: "zzb",
  age: 18,
};
//获取属性
console.log(obj.name);

// 给属性赋值
obj.name = "zzb";

// 删除属性
delete obj.name;
console.log(obj);


// 需求：对属性进行操作时，进行一些限制
// 限制：不允许某个属性被赋值/不允许某个属性被删除/不允许某些属性在遍历的时候被遍历出来
