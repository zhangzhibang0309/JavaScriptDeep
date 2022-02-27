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

obj.name = "kobe";
depend.notify();
