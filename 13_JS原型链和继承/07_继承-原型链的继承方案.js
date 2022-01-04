// 父类:公共的属性和方法
function Person() {
  this.name = "zzb";
  this.friends = [];
}

Person.prototype.eating = function () {
  console.log(this.name + "eating");
};
// 子类: 特有属性和方法
function Student() {
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
// 弊端1.打印stu对象，继承来的属性是看不到的
console.log(stu);

// 弊端2.创建出来两个stu对象
var stu1 = new Student();
var stu2 = new Student();
// 直接修改对象上的属性，是给本对象添加了一个新属性
stu1.name = "qwe";
console.log(stu2.name); // zzb
// 获取引用，修改引用中的值，会相互影响
stu1.friends.push("kobe");
console.log(stu1.friends); // kobe
console.log(stu2.friends); // kobe

// 弊端3.在前面实现类的过程中都没有传递参数 传参数不好传  因为有的属性在原型中

console.log(p);
// console.log(Object.getOwnPropertyDescriptors(Object.prototype));
