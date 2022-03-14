// 判断对象函数
function isObject(value) {
  const valueType = typeof value;
  return value !== null && (valueType === "object" || valueType === "function");
}

// 深拷贝函数
function deepClone(originValue, map = new WeakMap()) {
  // Set -- 浅拷贝
  if (originValue instanceof Set) {
    return new Set([...originValue]);
  }

  // Map -- 浅拷贝
  if (originValue instanceof Map) {
    return new Map([...originValue]);
  }

  // symbol -- 深拷贝
  if (typeof originValue === "symbol") {
    return Symbol(originValue.description);
  }

  // 处理函数 -- 浅拷贝
  if (typeof originValue === "function") {
    return originValue;
  }

  // 判断传入的originValue是否不是一个对象类型 -- 普通类型直接赋值
  if (!isObject(originValue)) {
    return originValue;
  }

  if (map.has(originValue)) {
    return map.get(originValue);
  }
  // 处理对象和数组 -- 都是深拷贝
  const newObject = Array.isArray(originValue) ? [] : {};

  map.set(originValue, newObject);
  // 遍历所有属性
  for (const key in originValue) {
    if (originValue) newObject[key] = deepClone(originValue[key], map);
  }

  // 对symbol的key进行特殊的处理
  const symbolKeys = Object.getOwnPropertySymbols(originValue);
  for (const sKey of symbolKeys) {
    // 这里创建一个新的symbol，如果真的有深拷贝的需求，可以把这局打开，并且将newSkey传入下面的newObject[sKey]
    // const newSkey = Symbol(sKey.description);

    // 下面这么写是浅拷贝，这里看需求，一般来说，key是symbol不需要深拷贝
    newObject[sKey] = deepClone(originValue[sKey], map);
  }

  return newObject;
}

const s1 = Symbol("aaa");
const s2 = Symbol("bbb");

// 原对象
const obj = {
  name: "zzb",
  age: 18,
  friend: {
    name: "james",
    address: {
      city: "广州",
    },
  },
  hobbies: ["abc", "qwe", "poi"],
  // 函数其实是没有必要深拷贝的，因为函数本来就是复用逻辑，很少改变
  foo() {
    console.log("foo function");
  },
  // symbol
  [s1]: "abc", //symbol作为key -- symbol不会被作为key遍历到
  s2: s2, // symbol作为值 -- 走值是symbol
  // Set
  set: new Set(["aaa", "bbb", "ccc"]),
  // Map
  map: new Map([
    ["aaa", "bbb"],
    ["ccc", "ddd"],
  ]),
};

obj.info = obj;

// 拷贝
const newObj = deepClone(obj);
console.log(newObj === obj);

// 验证是否深拷贝
obj.friend.name = "kobe";
obj.friend.address = "成都";
console.log(newObj);

console.log(newObj.info.info.info);
