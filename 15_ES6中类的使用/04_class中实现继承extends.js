class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  running() {
    console.log("running");
  }
  eating() {
    console.log("eating");
  }
  PersonMethod() {
    console.log("处理逻辑1");
    console.log("处理逻辑2");
    console.log("处理逻辑3");
  }
  static PersonStaticMethod() {
    console.log("PersonStaticMethod");
  }
}
// Student称之为子类（派生类）
class Student extends Person {
  // js引擎在解析子类的时候，如果我们有实现继承
  //   那么子类的构造方法中，在使用this之前必须调用super()
  constructor(name, age, sno) {
    super(name, age);

    this.sno = sno;
  }
  studying() {
    console.log("studying");
  }
  running() {
    console.log("running -- 重写");
  }
  PersonMethod() {
    //   super的第二个用法
    super.PersonMethod();

    console.log("处理逻辑4");
    console.log("处理逻辑5");
    console.log("处理逻辑6");
  }
  // 重写静态方法
  static PersonStaticMethod() {
      super.PersonStaticMethod()
      console.log("PersonStaticMethod -- 重写")
  }
}

var stu = new Student("zzb", 18, 111);
console.log(stu);
stu.eating();
stu.running();
stu.PersonMethod();
Person.PersonStaticMethod();
Student.PersonStaticMethod();

// console.log(Object.getOwnPropertyDescriptors(stu.__proto__));
// console.log(Object.getOwnPropertyDescriptors(stu.__proto__.__proto__));
