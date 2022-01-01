// 规范：构造函数的首字母一般是大写 
function Person(name, age, height, address) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.address = address;
  this.eating = function () {
    console.log(this.name + "在吃东西");
  };
  this.running = function () {
    console.log(this.name + "在跑步");
  };
}

var p1 = new Person("张三", 18, 1.88, "广州市");
var p2 = new Person("李四", 19, 1.77, "北京市");
console.log(p1); // person类型
console.log(p2); // person类型
