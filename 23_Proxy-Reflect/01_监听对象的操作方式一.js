const obj = {
  name: "why",
  age: 18,
};

// Object.defineProperty(obj, "name", {
//   get: function () {
//     console.log("监听到obj对象的name属性被访问了");
//   },
//   set: function () {
//     console.log("监听到obj对象的name属性被设置");
//   },
// });

// 这个api设计初衷并不是为了监听对象，不过确实能起到一定的作用
// 但是能监听到的轻快太少 只有访问和设置 比如增加 删除可能就监听不到
Object.keys(obj).forEach((key) => {
  let value = obj[key];

  Object.defineProperty(obj, key, {
    get: function () {
      console.log(`监听到obj对象的${key}属性被访问了`);
      return value;
    },
    set: function (newValue) {
      console.log(`监听到obj对象的${key}属性被设置`);
      value = newValue;
    },
  });
});

obj.name = "zzb";
obj.age = 22;

console.log(obj.name);
