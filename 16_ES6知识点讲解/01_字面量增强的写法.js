var name = "zzb";
var age = 18;

var obj = {
  // property shorthand（属性的简写）
  name,
  age,
  // 方法的简写
  foo: function () {},
  bar() {},
  baz: () => {}, // 这和简写无关
  // 3. computed property name（计算属性名）
  [name + 123]: "hhh",
};
console.log(obj.zzb123);
