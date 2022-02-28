// 这就是最终的响应式的一个实现，解决了之前说过的两个问题
// 但是似乎还有些不太好的地方，我们需要再进行一些优化：
// 1.现在想一下，每次对一个对象进行监听的时候，都要去写一个proxy对象，这样重复的代码就很多，所以可以封装一个类似工厂函数，让这个函数去帮助我们创建对象的代理，实现监听

let activeReactiveFn = null;

class Depend {
  constructor() {
    // 如果用数组的话，你收集依赖函数的时候，只要是函数里面对属性有一次依赖，就会执行一次
    // 所以改成set，收集的依赖函数就是唯一的了。
    this.reactiveFns = new Set();
  }

  depend() {
    if (activeReactiveFn) this.reactiveFns.add(activeReactiveFn);
  }

  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}

// 封装一个响应式的函数
function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

// 封装一个获取depend函数
const targetMap = new WeakMap();
function getDepend(target, key) {
  // 根据target对象获取map的过程
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }

  // 根据key获取depend对象
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}

// 对象的响应式
const obj = {
  name: "why", // depend对象
  age: 18, // depend对象
};

// 监听对象的属性变量: Proxy(vue3)/Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // 根据target.key获取对应的depend
    const depend = getDepend(target, key);
    // 给depend对象中添加响应函数
    // depend.addDepend(activeReactiveFn)
    depend.depend();

    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    // depend.notify()
    const depend = getDepend(target, key);
    depend.notify();
  },
});

watchFn(function () {
  console.log("-----第一个name函数开始------");
  console.log(objProxy.name); // 100行
  console.log(objProxy.name); // 100行
  console.log("-----第一个name函数结束------");
});

watchFn(function () {
  console.log("-----第一个age函数开始------");
  console.log(objProxy.age); // 100行
  console.log("-----第一个age函数结束------");
});

console.log("------------------改变obj的name值");
objProxy.name = "kobe";
