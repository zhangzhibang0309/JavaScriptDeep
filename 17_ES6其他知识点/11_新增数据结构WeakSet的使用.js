const weakSet = new WeakSet();

// 1.区别一：只能存放对象类型
// TypeError: Invalid value used in weak set
// weakSet.add(10);

// 2.区别二：对对象是一个弱引用
// 弱引用可能访问到 但是GC会忽视
let obj = { name: "zzb " };
weakSet.add(obj); // 弱引用

const set = new Set();
set.add(obj);

// 3.weakset的应用场景
const personSet = new WeakSet();
constru;
class Person {
  constructor() {
    personSet.add(this);
  }
  running() {
    if (!personSet.has(this)) {
      throw new Error("不能通过非构造方法创建出来的对象调用running方法");
    }
    console.log("running~",this);
  }
}
const p = new Person();
// p.running();

p = null // 如果用的是Set set对p强引用 置null也不会清除p对象 除非 personSet.delete(p)
// 但是如果是WeakSet就不需要了 弱引用 null之后直接p就没了

p.running.call({ name: "why" });
