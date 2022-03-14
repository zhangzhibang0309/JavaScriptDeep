const s1 = Symbol();
const s2 = Symbol();

const obj = {
  name: "zzb",
  friend: {
    name: "kobe",
  },
  foo: function () {
    console.log("foo");
  },
  [s1]: "abc", //symbol作为key
  s2: s2, // symbol作为值
};

// 简单的深拷贝
const info = JSON.parse(JSON.stringify(obj));
console.log(info === obj); // false
obj.friend.name = "james";
console.log(info); // kobe

// 弊端
// 1.用上面的方式函数，symbol都不能拷贝
// 2.不支持循环引用
