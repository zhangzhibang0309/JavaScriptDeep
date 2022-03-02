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

// 封装一个对象代理工厂函数
function reactive(obj) {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    Object.defineProperty(obj, key, {
      get() {
        const depend = getDepend(obj, key);
        depend.depend();
        return value;
      },
      set(newValue) {
        value = newValue;
        const depend = getDepend(obj, key);
        depend.notify();
      },
    });
  });

  // 这里其实return没有什么实质性的作用，本身obj传递的引用，obj === objProxy，我认为这样写只是为了后面能模拟一下似乎是搞了个info的代理一样
  return obj;
}

// obj对象的响应式 -- 写法一
const obj = {
  name: "why", // depend对象
  age: 18, // depend对象
};

reactive(obj);
watchFn(() => {
  console.log(obj.name, "obj");
});
console.log("------------------改变obj的name值");
obj.name = "kobe";

// info对象的响应式二 -- 写法二
const infoProxy = reactive({
  message: "hello info",
});
watchFn(() => {
  console.log(infoProxy.message, "info");
});
console.log("------------------改变info的内容");
infoProxy.message = "hello infoProxy";
