function foo() {
  function bar() {}
  return bar;
}

var fn1 = foo();
var fn2 = foo();
console.log(fn1 === fn2);


// 缺点就是每个对象 相同的方法也会单独创造新的对象
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
console.log(p1.eating === p2.eating); // false

