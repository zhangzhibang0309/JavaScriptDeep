const obj = {
  name: "zzb",
  age: 18,
};
// 基本使用
console.log("基本使用");
console.log(Object.entries(obj));

//  使用 利于遍历这个对象
console.log("使用 利于遍历这个对象");
const objEntries = Object.entries(obj);
objEntries.forEach((item) => {
  console.log(item);
});

// 也可以传入字符串数组
console.log("也可以传入字符串数组");
console.log(Object.entries(["asd", "qwe", "fgh"]));
console.log(Object.entries("asd"));
