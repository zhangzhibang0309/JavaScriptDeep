const obj = {
  _name: "zzb",
  get name() {
    return this._name;
  },
  set name(newValue) {
    this._name = newValue;
  },
};

// 
const objProxy = new Proxy(obj, {
  /**
   * 这里代码是怎么执行的呢？
   * 以get举例，你return了个Reflect.get()，然后访问obj[key]
   * 但是发现obj有个get方法，所以就进入get方法，去return this._name
   * 问题是这里的this是什么呢？如果在这里你直接Reflect.get(target, key)的话，毫无疑问this是obj
   * 但是我们既然使用了proxy，就不想直接操作对象，所以就用第三个参数receiver
   * receiver === objProxy
   * 所以这个作用就是将this绑定为objProxy，最终修改的是objProxy.name = "kobe"
   * set同理
   * 
   * @param {*} target obj
   * @param {*} key 某个key
   * @param {*} receiver objProxy
   * @returns 
   */
  get(target, key, receiver) {
    console.log("get方法被访问------");
    return Reflect.get(target, key, receiver);
  },
  /**
   * 
   * @param {*} target obj
   * @param {*} key 某个key
   * @param {*} newValue 赋予的新值
   * @param {*} reveiver objProxy
   */
  set(target, key, newValue, reveiver) {
    console.log("set方法被访问------");
    Reflect.set(target, key, newValue, reveiver);
  },
});

objProxy.name = "kobe";
console.log(objProxy.name);
console.log(obj.name);
