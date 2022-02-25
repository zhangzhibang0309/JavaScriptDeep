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

  // 监听in的捕获器
  has(target, key) {
    console.log(`监听到对象的${key}属性in操作`, target);
    return key in target;
  },

  // 监听delete的捕获器
  deleteProperty(target, key) {
    console.log(`监听到对象的${key}属性delete操作`, target);
    delete target[key];
  },
});

// in
console.log("name" in objProxy);
// delete
delete objProxy.name;
console.log(obj)
// 