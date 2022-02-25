// 其他proxy捕获器

const obj = {
  name: "zzb",
  age: 18,
};

const proxyObj = new Proxy("obj", {
  // Object.getPrototypeOf方法的捕获器
  getPrototypeOf() {},

  // Object.setPrototypeOf方法的捕获器
  setPrototypeOf() {},

  // Object.isExtensible方法的捕获器
  isExtensible() {},

  // Object.preventExtensions方法的捕捉器
  preventExtensions() {},

  // Object.getOwnPropertyDescriptor方法的捕获器
  getOwnPropertyDescriptor() {},

  // Object.defineProperty方法的捕获器
  defineProperty() {},

  // Object.getOwnPropertyNames Object.GetOwnPropertySymbols方法捕捉器
  ownKeys() {},
});
