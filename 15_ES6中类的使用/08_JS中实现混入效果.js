class Person {}

function mixinRunner(BaseClass) {
  class NewClass extends BaseClass {
    running() {
      console.log("running~");
    }
  }
  return NewClass;
}

function mixinEater(BaseClass) {
  return class extends BaseClass {
    eating() {
      console.log("eating~");
    }
  };
}

// js中类只能有一个父类：单继承
class Student extends Person {}

var NewStudent = mixinRunner(mixinEater(Student));
var ns = new NewStudent();
ns.running();
ns.eating();
