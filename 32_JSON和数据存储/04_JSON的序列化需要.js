const obj = {
  name: "zzb",
  age: 18,
  friend: {
    name: "kobe",
  },
  hobbies: ["篮球", "足球"],
};

// 将obj转成JSON格式的字符串
const objString = JSON.stringify(obj);
console.log(objString);

// 将对象数据存储localStorage
localStorage.setItem("obj", objString);
const jsonString = localStorage.getItem("obj");

// 将JSON格式的字符串转回对象
const info = JSON.parse(jsonString);
console.log(info);
