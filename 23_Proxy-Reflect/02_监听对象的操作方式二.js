// 使用proxy

const obj = {
  name: "why",
  age: 18,
};

const objProxy = new Proxy(obj, {
  /**
   * 获取值时的捕获器
   * @param {*} target 被代理的对象
   * @param {*} key 访问到的key
   */
  get(target, key) {
    console.log(`监听到${obj}对象的${key}属性被访问了`, target);
    return target[key];
  },
  /**
   * 设置值时的捕获器
   * @param {*} target 被代理的对象
   * @param {*} key 修改的key
   * @param {*} newValue 传过来的新值
   */
  set(target, key, newValue) {
    console.log(`监听到${obj}对象的${key}属性被设置值`, target);
    target[key] = newValue;
  },
});

console.log(objProxy.name);
console.log(objProxy.age);

objProxy.name = "kobe";
objProxy.age = 22;
console.log(obj.name);
console.log(obj.age);
