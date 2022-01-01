var obj = {
  // 这种_xx代表的意思是私有变量 通过存取数据描述符去修改 但是js是不存在真正意义上的私有变量的
  _age: 18,
  _eating: function () {},
};

Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "zzb",
  },
  age: {
    configurable: false,
    enumerable: false,
    get: function () {
      return this._age;
    },
    set: function (value) {
      this._age = value;
    },
  },
});

// 获取某个特性属性的属性描述符
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// console.log(Object.getOwnPropertyDescriptor(obj, "age"));

// 获取对象的所有属性描述符
console.log(Object.getOwnPropertyDescriptors(obj))