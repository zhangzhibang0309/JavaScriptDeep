var obj = {
  name: "obj",
  foo: function () {
    console.log(this);
  },
};

// new优先级更高
var f = new obj.foo(); // foo
