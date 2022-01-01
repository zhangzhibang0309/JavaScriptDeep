// 采用字面量批量创建对象的话 代码非常冗余
var p1 = {
  name: "张三",
  age: 20,
  height: 1.88,
  address: "上海市",
  eating: function () {
    console.log(this.name + "再吃东西");
  },
  running: function () {
    console.log(this.name + "在跑步");
  },
};

var p2 = {
  name: "李四",
  age: 19,
  height: 1.77,
  address: "上海市",
  eating: function () {
    console.log(this.name + "再吃东西");
  },
  running: function () {
    console.log(this.name + "在跑步");
  },
};

var p3 = {
  name: "王五",
  age: 20,
  height: 1.99,
  address: "北京市",
  eating: function () {
    console.log(this.name + "再吃东西");
  },
  running: function () {
    console.log(this.name + "在跑步");
  },
};
