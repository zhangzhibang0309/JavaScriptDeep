class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log("eating");
  }
}

// babel转换
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    // 配置各种配置项 比我们直接赋值继承要详细
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) {
      descriptor.writable = true;
    }

    Object.defineProperty(
      target /*原型 */,
      descriptor.key /*属性名 */,
      descriptor /*属性值*/
    );
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) {
    // 第二个参数有值 说明需要赋值 将protoProps赋值给Constructor.prototype（Person.prototype）
    _defineProperties(Constructor.prototype, protoProps);
  }
  if (staticProps) {
    _defineProperties(Constructor, staticProps);
  }
  return Constructor;
}

// /*#__PURE__*/ 纯函数
// 标记为纯函数 webpack 压缩的时候 会tree-shaking
// 这个函数没有side effect
var Person = /*#__PURE__*/ (function () {
  //   "use strict";

  function Person(name, age) {
    // _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  // Person.prototype.eating = function(){ console.log("eating"); }
  // 就是做了上面这句代码的事情 不过她做了封装
  _createClass(Person, [
    {
      key: "eating",
      value: function eating() {
        console.log("eating");
      },
    },
  ]);

  return Person;
})();
