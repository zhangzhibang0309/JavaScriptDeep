// 此为vue3的响应式实现
// 这样就不需要每次都new一个Proxy，而是可以通过工厂函数生产

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
  return new Proxy(obj, {
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
}

// obj对象的响应式 -- 写法一
const obj = {
  name: "why", // depend对象
  age: 18, // depend对象
};

const objProxy = reactive(obj);

watchFn(function () {
  console.log("obj对象的响应式 -- 写法一");
  console.log(objProxy.name); 
});
console.log("------------------改变obj的name值");
objProxy.name = "kobe";

// info对象的响应式 -- 写法二
const infoProxy = reactive({
  message: "hello infoProxy"
})
watchFn(function() {
  console.log("info对象的响应式 -- 写法二")
  console.log(infoProxy.message)
})
console.log("------------------改变info的message值");
infoProxy.message = "hello infoProxy2"