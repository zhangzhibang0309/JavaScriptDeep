// 现在已经是能够正确的去收集依赖，然后能够监听
// 但是还有几个问题：
// 1. 在proxy的get方法里面depend.addDepend(activeReactiveFn)这里可以封装一个对象自己的方法，然后也不用传参数，只要表明是在收集依赖就可以
// 2. reactiveFns现在是一个数组，数组里面的值并不是唯一的，所以可能在一个watchFn里面有多行get调用就会收集多次函数，导致一次响应式会多次调用函数

class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify() {
    console.log(this.reactiveFns)
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式的函数
let activeReactiveFn = null
function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

// 封装一个获取depend函数
const targetMap = new WeakMap()
function getDepend(target, key) {
  // 根据target对象获取map的过程
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  // 根据key获取depend对象
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
  return depend
}

// 对象的响应式
const obj = {
  name: "why", // depend对象
  age: 18 // depend对象
}

// 监听对象的属性变量: Proxy(vue3)/Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    // 根据target.key获取对应的depend
    const depend = getDepend(target, key)
    // 给depend对象中添加响应函数
    depend.addDepend(activeReactiveFn)

    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    // depend.notify()
    const depend = getDepend(target, key)
    depend.notify()
  }
})

watchFn(function() {
  console.log("-----第一个name函数开始------")
  console.log("你好啊, 李银河")
  console.log("Hello World")
  console.log(objProxy.name) // 100行
  console.log("-----第一个name函数结束------")
})

watchFn(function() {
  console.log(objProxy.name, "demo function -------")
})

watchFn(function() {
  console.log(objProxy.age, "age 发生变化是需要执行的----1")
})

watchFn(function() {
  console.log(objProxy.age, "age 发生变化是需要执行的----2")
})

watchFn(function() {
  console.log(objProxy.name, "新函数")
  console.log(objProxy.age, "新函数")
})

console.log("------------------------------改变obj的name值")

objProxy.name = "kobe"
// objProxy.name = "james"

// objProxy.age = 20
// objProxy.age = 30

