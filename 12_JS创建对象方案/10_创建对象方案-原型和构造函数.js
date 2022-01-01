function Person(name, age, height, address) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.address = address;
}

Person.prototype.eating = function () {
  console.log(this.name + "再吃东西~");
};
Person.prototype.running = function () {
  console.log(this.name + "在跑步~");
};
var p1 = new Person("zzb", 18, 1.88, "北京市");
p1.eating();
