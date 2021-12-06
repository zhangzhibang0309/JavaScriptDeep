// 1.测试箭头函数中this的指向
var name = "zzb";

var foo = () => {
  console.log(this);
};

foo();
var obj = { foo: foo };
obj.foo();
foo.call("abc");

// 2.应用场景
var obj = {
  data: [],
  getData: function () {
    // 发送网络请求，将结果放到上面data中
    // 在箭头函数出现之前的解决方案
    var _this = this;
    // setTimeout(() => {
    //   var result = ["abc", "sdd", "qwe"];
    //   _this.data = result;
    // }, 2000);
    setTimeout(() => {
      var result = ["abc", "sdd", "qwe"];
      this.data = result; // 箭头函数不绑定this  自动找到外面的
    }, 2000);
  },
};
