var obj = {
  name: "zzb",
};

// console.log(obj["name"]);

// ES6中Symbol的使用
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2);

// ES10中，Symbol还有一个描述（description）
const s3 = Symbol("aaa");
console.log(s3.description);

// 3.Symbol值作为key
// 3.1 在定义对象字面量时的使用
const obj2 = {
  [s1]: "abc",
  [s2]: "qwe", // 直接让key成为symbol
  // s3, // 只能让值成为key
};
console.log(obj2);

// 3.2 新增属性
obj2[s3] = "nba";

// 3.3 Object.defineProperty方式
const s4 = Symbol();
Object.defineProperty(obj2, s4, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "mba",
});
console.log(obj2[s1], obj[s2], obj[s3], obj[s4]);
// 注意： 不能通过.语法获取 只能[]

// 4.使用Symbol作为key的属性名，在遍历Object.keys等是获取不到这些Symbol值的
console.log(Object.keys(obj2));
console.log(Object.getOwnPropertyNames(obj2));
console.log(Object.getOwnPropertySymbols(obj2));
const sKeys = Object.getOwnPropertySymbols(obj2);
for (const sKey of sKeys) {
  console.log(obj2[sKey]);
}

// 5.Symbol.for(描述)
const sa = Symbol.for("aaa");
// 会找前面值相同的 直接拿来
const sb = Symbol.for("aaa");
console.log(sa === sb);

const key = Symbol.keyFor(sa);
console.log(key);
const sc = Symbol.for(key);
console.log(sc === sa);
console.log(sc)