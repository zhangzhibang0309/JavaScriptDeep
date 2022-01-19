// for...in 标准化
const obj = {
  name: "zzb",
  age: 18,
};

// 规范后 in遍历出来的就是key
for (const item in obj) {
  console.log(item);
}
