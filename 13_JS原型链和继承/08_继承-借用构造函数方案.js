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

var p = new Person();
Student.prototype = p;

Student.prototype.studying = function () {
  console.log(this.name + "studying");
};

var stu = new Student();
console.log(stu.name);
stu.eating();
stu.studying();
console.log("+++++++++++++++++");

// 这种方式继承的弊端：
// 解决弊端1.打印stu对象，继承来的属性是看不到的
console.log(stu);

// 解决弊端2.创建出来两个stu对象
var stu1 = new Student("why", 19, ["kobe", "lilei"], 222);
var stu2 = new Student("asd", 34, ["zhangsan", "lihua"], 333);
// 直接修改对象上的属性，是给本对象添加了一个新属性
// stu1.name = "qwe";
// console.log(stu2.name); // zzb
// 获取引用，修改引用中的值，会相互影响
stu1.friends.push("lucy");
console.log(stu1.friends); // kobe
console.log(stu2.friends); // kobe

// 解决弊端3.在前面实现类的过程中都没有传递参数 传参数不好传  因为有的属性在原型中
// var stu3 = new Student("asd", 18);

// 当然 这种方案还是有弊端
// 1.第一个弊端:Person()多次调用 至少两次
// 2.stu的原型对象上会多出一些属性,但是这些属性没有存在必要
