// 1.JavaScript中对象是不能使用对象来作为key的
const obj1 = { name: "zzb" };
const obj2 = { name: "kobe" };

const info = {
  [obj1]: "aaa",
  [obj2]: "bbb",
};
// 就算这样 对象也是被转成字符串去当key obj1 obj2转成的字符串一样，所以只有一个
console.log(info); //{ '[object Object]': 'bbb' }

// 2.Map就是允许我们对象类型来作为key的
// 构造方法创建
const map = new Map();
map.set(obj1, "aaa");
map.set(obj2, "bbb");
map.set(1, "bbb");
console.log(map);
// 数组创建
const map2 = new Map([
  [obj1, "aaa"],
  [obj2, "bbb"],
  [2, "ccc"],
]);
console.log(map2);

// 3.常见的属性和方法
// size
console.log(map2.size);
// set
map2.set("why", "eee");
console.log(map2);
// get(key)
console.log(map2.get("why"));
// has(key)
console.log(map2.has("why"));
// delete
map2.delete("why");
console.log(map2);
// clear
// map2.clear();
console.log(map2,"+++++++++++");

// 4.遍历map
map2.forEach((item, key) => {
  console.log(item, key);
});

for (const [key,value] of map2) {
  console.log(key,value);
}
