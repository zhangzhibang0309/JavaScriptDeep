var obj = {
  name: "why",
  age: 18,
};

// 原型式继承函数 后来出现新的api之后的优化
function createObject(o) {
  var newObj = {};
  Object.setPrototypeOf(newObj, o);
  return newObj;
}

// 道格拉斯当年真实的实现方式
function createObject2(o) {
  function Fn() {}
  Fn.prototype = o;
  var newObj = new Fn();
  return newObj;
}

// 那为什么不更简单一点呢
// 虽然能这么写 但是正常开发中 一般不会暴露__proto__
// function createObject(o) {
//   var newObj = {};
//   newObj.__proto__ = o;
//   return newObj;
// }

// 下面这三种方式 都可以实现继承
var info = createObject(obj);
var info2 = createObject2(obj);
var info3 = Object.create(obj);
console.log(info.__proto__);
console.log(info2.__proto__);
console.log(info3.__proto__);
