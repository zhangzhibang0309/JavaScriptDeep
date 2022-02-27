let reactiveFns = [];

function watchFn(fn) {
  reactiveFns.push(fn);
}

const obj = {
  name: "zzb",
  age: 18,
};

watchFn(function () {
  const newName = obj.name;
  console.log("你好啊，李银河");
  console.log("Hello World");
  console.log(obj.name);
});

watchFn(function () {
  console.log(obj.name, "fn2--------");
});

function bar() {
  console.log("我不会执行");
  console.log("我没有监听");
}

obj.name = "kobe";
reactiveFns.forEach((fn) => {
  fn();
});
