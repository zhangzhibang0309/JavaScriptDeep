var names = ["abc", "cba", "qwe"];

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._address = "北京市";
  }
  eating() {
    console.log("eating");
  }
  running() {
    console.log("running");
  }

  // 类的访问器方法
  get address() {
    return this._address;
  }
  set address(newValue) {
    this._address = newValue;
  }

  // 类的静态方法
  //   Person.createPerson()
  static createPerson() {
    var nameIndex = Math.floor(Math.random() * names.length);
    var name = names[nameIndex];
    var age = Math.floor(Math.random() * 100);
    return new Person(name, age);
  }
}

var p = new Person("zzb", 18);
p.eating();
p.running();
var p2 = new Person("zzb", 18);
console.log(p2.eating === p.eating);

// 类的访问器方法
console.log(p.address);
p.address = "深圳市";
console.log(p.address);

var p2 = Person.createPerson();
console.log(p2);
