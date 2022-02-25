const obj = {
  name: "zzb",
  age: 18,
};

const objProxy = new Proxy(obj, {
  get(target, key) {
    console.log("get---------");
    return Reflect.get(target, key);
  },
  set(target, key, newValue) {
    console.log("set---------");

    // 如果用这种直接操作的话 没法监听到是否设置成功
    // target[key] = newValue
    Object.freeze(target)
    // 但是如果用reflect的话，会返回一个布尔值，来表明设置是否成功
    const result = Reflect.set(target, key, newValue);

    if(result) console.log("设置成功")
    else console.log("设置失败")
  },
});

objProxy.name = "kobe";
console.log(objProxy.name);
