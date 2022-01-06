// 工具1
function createObject(o) {
  function Fn() {}
  Fn.prototype = o;
  return new Fn();
}

// 工具2
function inheritPrototype(SbuType, SuperType) {
  SbuType.prototype = createObject(SuperType.prototype);
  //   SbuType.prototype = Object.create(SuperType.prototype);
  Object.defineProperty(SbuType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SbuType,
  });
}

function Person(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;
}

Person.prototype.running = function () {
  console.log("running");
};

Person.prototype.eating = function () {
  console.log("eating");
};

function Student(name, age, friends, sno, score) {
  Person.call(this, name, age, friends);
  this.sno = sno;
  this.score = score;
}

// 每次继承都要如此 所以很麻烦 实现一个工具函数inheritPrototype
// Student.prototype = Object.create(Person.prototype);
// Object.defineProperty(Student.prototype, "constructor", {
//   enumerable: false,
//   configurable: true,
//   writable: true,
//   value: "Student",
// });
inheritPrototype(Student, Person);

Student.prototype.studying = function () {
  console.log("studying~");
};

var stu = new Student("zzb", 18, ["kobe"], 111, 100);
console.log(stu);
stu.studying();
stu.eating();
stu.running();
