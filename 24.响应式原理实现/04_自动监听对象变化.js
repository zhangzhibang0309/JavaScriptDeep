class Depend {
  constructor() {
    this.reactiveFns = [];
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }

  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}

// 创建收集类
const depend = new Depend();

// 定义watchFn
function watchFn(fn) {
  depend.addDepend(fn);
}

// 定义对象
const obj = {
  name: "zzb",
  age: 18,
};

// 使用proxy自动监听
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    depend.notify();
  },
});

// 监听Fn
watchFn(function () {
  const newName = obj.name;
  console.log("你好啊，李银河");
  console.log("Hello World");
  console.log(obj.name,);
});
watchFn(function () {
  console.log(obj.name, "fn2--------");
});

// 改变值 自动监听
objProxy.name = "kobe";
objProxy.name = "james";
objProxy.name = "curry";
