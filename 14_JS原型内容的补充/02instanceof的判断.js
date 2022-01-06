function inheritPrototype(SbuType, SuperType) {
  SbuType.prototype = Object.create(SuperType.prototype);
  Object.defineProperty(SbuType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SbuType,
  });
}

function Person() {}

function Student() {}

// 继承
inheritPrototype(Student, Person);

// instanceof 用于检测构造函数的prototypr，是否出现在某个实例对象的原型链上
var stu = new Student();
console.log(stu instanceof Student); // true
console.log(stu instanceof Person); // true
console.log(stu instanceof Object); // true
