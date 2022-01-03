var obj = {
  name: "zzb",
  age: 18,
};

Object.defineProperty(obj, "address", {
  value: "北京市",
});
// 这个地方虽然在浏览器console中会输出，但本质还是不可枚举，浏览器是为了方便条视，字体颜色偏灰
console.log(obj);
