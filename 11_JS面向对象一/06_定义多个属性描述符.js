var obj = {
    // 这种_xx代表的意思是私有变量 通过存取数据描述符去修改 但是js是不存在真正意义上的私有变量的
  _age: 18,
  _eating: function () {},
  // 直接在这里写 和用definedProperty差不多 就是可配置和可枚举
  set age(value) {
    this._age = value;
  },
  get age() {
    return this._age;
  },
};

Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "zzb",
  },
  //   age: {
  //     configurable: false,
  //     enumerable: false,
  //     get: function() {
  //         return this._age
  //     },
  //     set: function(value) {
  //         this._age = value
  //     }
  //   }
});

console.log(obj);
obj.age = 100
console.log(obj);


//
