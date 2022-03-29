const obj = {
  name: "zzb",
  age: 18,
  friends: {
    name: "kobe",
  },
  hobbies: ["篮球", "足球"],
  //   toJSON() {
  //       return 123456
  //   }
};

// 1.直接转化
const stringify1 = JSON.stringify(obj);
console.log("stringify1---", stringify1);

// 2.stringify第二个参数replacer
// 2.1 传入数组：设定那些需要转换
const stringify2 = JSON.stringify(obj, ["name", "friends"]);
console.log("stringify2---", stringify2);
// 2.2 传入回调函数：
const stringify3 = JSON.stringify(obj, (key, value) => {
  // 这个回调函数就是对每个键值对做一下处理，然后return
  if (key === "age") {
    return value + 1;
  }
  return value;
});
console.log("stringify3---", stringify3);

// 3.stringify第三参数 space
const stringify4 = JSON.stringify(obj, null, 2);
// const stringify4 = JSON.stringify(obj,null,"~~")
console.log(stringify4);

// 4.如果obj对象中有toJSON方法，那么结果全都按照toJSON返回值来
