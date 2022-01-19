//  ES12：FinallizationRegistry类
const finalRegistry = new FinalizationRegistry((value) => {
  console.log("注册正在finalRegistry的对象，某一个被销毁", value);
});
let obj = { name: "zzb" };
let info = { age: 18 };

finalRegistry.register(obj, "obj");
finalRegistry.register(info, "value");
obj = null;
info = null;
