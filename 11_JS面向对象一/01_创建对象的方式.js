// 创建一个对象，对某一个人进行抽象（描述）
var obj = new Object();
obj.name = "zzb";
obj.age = "18";
obj.running = function () {
  console.log(this.name, "在跑步~");
};
// 2。创建方式二：字面量形式
var info = {
  name: "kobe",
  age: 40,
  height: 1.88,
  eating: function () {
    console.log(this.name, "在跑步");
  },
};
