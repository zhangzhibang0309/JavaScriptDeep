var obj = {
  name: "why",
  age: 18,
};

// 原型式继承函数
function createObject(o) {
  var newObj = {};
  Object.setPrototypeOf(newObj,o);
  return newObj;
}

function createObject2(o) {
  function Fn() {}
  Fn.prototype = o;
  var newObj = new Fn();
  return newObj;
}

var info = createObject(obj);
var info2 = createObject2(obj);
var info3 = Object.create(obj);
console.log(info.__proto__);
console.log(info2.__proto__);
console.log(info3.__proto__);
