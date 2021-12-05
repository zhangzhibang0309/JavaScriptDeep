function foo() {
  console.log(this);
}

// 独立函数调用
// foo()

// 案例一
// var obj = {
//   name: "zzb",
//   foo: foo,
// };

// obj.foo(); // obj对象

// 2.案例二
// var obj = {
//   name: "zzb",
//   eating: function () {
//     console.log(this.name + "在吃东西");
//   },
//   running: function () {
//     console.log(this.name + "在跑步");
//   },
// };
// obj.eating();
// obj.running();

// var fn = obj.eating;
// fn(); this是window 所以this.name是空

// 3.案例三
var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this);
  },
};
var obj2 = {
  name: "obj2",
  bar: obj1.foo,
};

obj2.bar(); // obj2
