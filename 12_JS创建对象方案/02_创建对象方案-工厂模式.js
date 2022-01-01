// 工厂模式：工厂函数
function createPerson(name, age, height, address) {
  var p = {};
  p.name = name;
  p.age = age;
  p.height = height;
  p.address = address;
  p.eating = function () {
    console.log(this.name + "eating~");
  };
  p.running = function () {
    console.log(this.name + "runningF~");
  };

  return p;
}

var p1 = createPerson("张三", 18, 1.88, "广州市");
var p2 = createPerson("李四", 22, 1.99, "北京市");
var p3 = createPerson("王五", 18, 1.77, "深圳市");

// 工厂模式的缺点
// 获取不到对象真实的类型 都是object类型
console.log(p1, p2, p3);
