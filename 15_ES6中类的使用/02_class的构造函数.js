// 类的声明
class Person {
  // 类的构造函数
  // 注意：一个类智能有一个构造函数
  // 1.在内存中创建一个对象
  // 2.将类的原型prototype赋值给创建出来的对象,__proto_- = Person.prototype
  // 3.将对象赋值给函数的this：new绑定this = 对象
  // 4.执行函数体中的代码
  // 5.自动返回创建出来的对象
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var p1 = new Person("zzb", 18);
var p2 = new Person("kobe", 30);
console.log(p1, p2);
