// 父类:公共的属性和方法
function Person(name, age, friends) {
  // this = stu
  this.name = name;
  this.age = age;
  this.friends = friends;
}

Person.prototype.eating = function () {
  console.log(this.name + "eating");
};
// 子类: 特有属性和方法
function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends);
  this.sno = 111;
}

Student.prototype = Person.prototype;
// 这么做导致后免得studying也会添加到persor.prototype里面，
// 如果还有个teacher对象的话，也会继承studying属性，数据共享过头了

Student.prototype.studying = function () {
  console.log(this.name + "studying");
};

var stu = new Student();
console.log(stu);
stu.studying();
