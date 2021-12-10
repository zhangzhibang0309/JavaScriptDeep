# this

## this的作用

```javascript
// 从某些角度来说，开发中如果没有this，很多的问题我们也是有解决方案的
// 但是没有this，会让我们写代码很不方便
// 不用this 下面就要obj.name 如果对象改名 还需要改成和对象名对应的
var obj = {
    name: "zzb",
    eating: function() {
        console.log(this.name + "在吃东西")
    },
    running: function() {
        console.log(this.name + "在跑步")
    },
    studing: function() {
        console.log(this.name + "在学习")
    }
}
```

## this在全局作用域指向什么

```javascript
// 在的大多数情况下，this都是出现在函数中
// 在全局作用域下
// window(globalObject)
// Node环境:{}
console.log(this);
console.log(window); 
```

## this同一个函数的this的不同

```
// this指向什么，跟函数所处的位置是没有关系的
// 跟函数被调用的方式是有关系的 

function foo() {
  console.log(this);
}

// 1.直接调用
foo();

// 2.创建一个对象，对象中的函数指向foo
var obj = {
  name: "zzb",
  foo: foo,
};
obj.foo();

// 3.apply调用
foo.apply("abc");

```

this结果如下图所示

![image-20211204192422290](https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/image-20211204192422290.png)

所以可以得出以下结论：

1. 函数在抵用时，JavaScript会默认给this绑定一个值；
2. this的绑定和定义的位置（编写的位置）没有关系
3. this的绑定和调用方式以及调用的位置有关系；
4. this实在运行时被绑定的。

this的绑定规则大概有四种：

1. 默认绑定
2. 隐式绑定
3. 显式绑定
4. new绑定

## this绑定方式

### 默认绑定

```javascript
// 独立函数调用

// 案例一
// function foo() {
//   console.log(this);
// }

// foo(); // window

// 案例二
// function foo1() {
//   console.log(this);
// }
// function foo2() {
//   console.log(this);
//   foo1();
// }
// function foo3() {
//   console.log(this);
//   foo2();
// }
// foo3(); // window

// 案例三
// var obj = {
//   name: "zzb",
//   foo: function () {
//     console.log(this);
//   },
// };

// var bar = obj.foo;
// bar(); // window

// 案例四
// function foo() {
//   console.log(this);
// }

// var obj = {
//   name: "zzb",
//   foo: foo,
// };
// var bar = obj.foo;
// bar(); // window

// 案例五
function foo() {
  function bar() {
    console.log(this);
  }
  return bar;
}

var fn = foo();
fn(); // 无调用主题 还是window

var obj = {
  name: "zzb",
  eating: fn,
};

obj.eating(); // 有调用主题 -- 这就是隐式调用

```

### 隐式绑定

```javascript
function foo() {
  console.log(this);
}

// 独立函数调用
// foo()

// 案例一
// var obj = {
//   name: "zzb",
//   foo: foo,
// };

// obj.foo(); // obj对象

// 2.案例二
// var obj = {
//   name: "zzb",
//   eating: function () {
//     console.log(this.name + "在吃东西");
//   },
//   running: function () {
//     console.log(this.name + "在跑步");
//   },
// };
// obj.eating();
// obj.running();

// var fn = obj.eating;
// fn(); this是window 所以this.name是空

// 3.案例三
var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this);
  },
};
var obj2 = {
  name: "obj2",
  bar: obj1.foo,
};

obj2.bar(); // obj2

```

### 显示绑定

```javascript
// function foo() {
//   console.log("函数被调用了", this);
// }

// foo直接调用call/apply调用的不同在于this绑定的不同
// foo直接调用指向的是全局对象（window）
// foo（）

// var obj = {
//   name: "zzb",
// };
// call/qpply是可以指定this的绑定对象
// call和apply有什么区别

// foo.call(obj);
// foo.apply(obj);
// foo.apply("aaaa");

// 2.call和apply的区别 就是传参的不同
function sum(num1, num2) {
  console.log(num1 + num2, this);
}
sum(1, 2);
sum.call("call", 1, 2);
sum.apply("apply", [1, 2]);

// 3.call和apply在执行函数时，是可以明确的绑定this，这被称为显式绑定
```

```javascript
function foo() {
  console.log(this);
}

// foo.call("aaa")
// foo.call("aaa")
// foo.call("aaa")
// foo.call("aaa")


// 默认绑定和显式绑定bind 显式绑定优先级更高
var newFoo = foo.bind("aaa");
newFoo();
```

### new绑定

```javascript
// 我们通过一个new关键字调用一个函数时（构造器），这个时候this是在调用这个构造器时创建出来的对象
// this = 创建出来的对象
// 这个绑定过程就是new绑定

function Person(name, age) {
  // new出来的对象赋值给this
  // return this
  this.name = name;
  this.age = age;
}

var p1 = new Person("zzb", 18);
console.log(p1.name, p1.age);

var p2 = new Person("kobe", 30);
console.log(p2.name, p2.age);

```

### this规则优先级

默认规则的优先级最低

显示绑定规则优先级高于隐式绑定

```javascript
// var obj = {
//   name: "obj",
//   foo: function () {
//     console.log(this);
//   },
// };

// obj.foo(); // obj

// 1.call/apply的显式绑定高于隐式绑定
// obj.foo.call("abc");

// 2.bind 隐式绑定 这个不太明显
// var bar = obj.foo.bind("cba");
// bar();

// 3. 更明显的比较 说明bind比隐式绑定优先级更高
function foo() {
  console.log(this);
}

var obj = {
  name: "obj",
  foo: foo.bind("cba"),
};
obj.foo();

// 有个比较有意思的 bind和call比较
// foo.bind("abc").call("qwe"); // this式abc 说明bind 更高

```



new绑定优先级高于隐式绑定

```javascript
var obj = {
  name: "obj",
  foo: function () {
    console.log(this);
  },
};

// new优先级更高
var f = new obj.foo(); // foo

```

```javascript
// 结论： new关键字不能和apply/call一起来使用

// new bind
function foo() {
  console.log(this);
}

var bar = foo.bind("aaa");

var obj = new bar();


// new绑定 > 显式绑定（apply/call/bind） > 隐式绑定（obj.foo()） > 默认绑定（独立函数调用）
```

#### 规则之外

忽略显示绑定

```javascript
function foo() {
  console.log(this);
}

foo.apply("abc");
foo.apply({});

// apply/call/bind: 当传入null undefined时候 自动this指向window
foo.apply(null);
foo.apply(undefined);
var bar = foo.bind(null);
bar();


```

间接函数引用

```javascript
var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this);
  },
};

var obj2 = {
  name: "obj2",
};

// obj2.bar = obj1.foo;
// obj2.bar();

// 这属于独立函数调用
(obj2.bar = obj1.foo)(); // window

```

## 箭头函数的使用

````javascript
// 1.编写箭头函数
// 1> (): 参数
// 2> =->: 箭头

const { log } = require("console");

// 3> {}: 函数的执行体
var foo = (num1, num2, num3) => {
  console.log(num1, num2, num3);
  var result = num1 + num2 + num3;
  console.log(result);
};

function bar(num1, num2, num3) {}

// 高阶函数在使用时，也可以传入箭头函数
var nums = [10, 20, 45, 78];
nums.forEach((item, index, arr) => {});

// 箭头函数有一些常见的简写
// 简写一 参数只有一个 ()可以省略
nums.forEach((item) => {
  console, log(item);
});
// 简写二 如果函数执行体 只有一行代码 那么大括号可以省略
// 并且会将这行代码的执行结果最为返回值
nums.forEach((item) => console.log(item));
var newNums = nums.filter((item) => item % 2 == 0);
console.log(newNums);

// filter/map/reduce一起用
var result = nums
  .filter((item) => item % 2 == 0)
  .map((item) => item * 100)
  .reduce((preValue, item) => preValue + item);

console.log(result);

// 简写三： 如果一个箭头函数，只有一行代码，并且返回一个对象 这个时候如何别写简写
var bar = () => ({ name: "zzb", age: 18 });
console.log(bar());

````

### 箭头函数中的this获取

```javascript
// 1.测试箭头函数中this的指向
var name = "zzb";

var foo = () => {
  console.log(this);
};

foo();
var obj = { foo: foo };
obj.foo();
foo.call("abc");

// 2.应用场景
var obj = {
  data: [],
  getData: function () {
    // 发送网络请求，将结果放到上面data中
    // 在箭头函数出现之前的解决方案
    var _this = this;
    // setTimeout(() => {
    //   var result = ["abc", "sdd", "qwe"];
    //   _this.data = result;
    // }, 2000);
    setTimeout(() => {
      var result = ["abc", "sdd", "qwe"];
      this.data = result; // 箭头函数不绑定this  自动找到外面的
    }, 2000);
  },
};

```

## 面试题

第一题

```javascript
var name = "window";

var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};

function sayName() {
  var sss = person.sayName;
  sss(); // window: 独立函数调用
  person.sayName(); // person: 隐式调用
  (person.sayName)(); // person: 隐式调用
  (b = person.sayName)(); // window: 赋值表达式(独立函数调用)
}

sayName();


```

第二题

```javascript
var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

// person1.foo1(); // person1(隐式绑定)
// person1.foo1.call(person2); // person2(显示绑定优先级大于隐式绑定)

// person1.foo2(); // window(不绑定作用域,上层作用域是全局)
// person1.foo2.call(person2); // window

// person1.foo3()(); // window(独立函数调用)
// person1.foo3.call(person2)(); // window(独立函数调用)
// person1.foo3().call(person2); // person2(最终调用返回函数式, 使用的是显示绑定)

// person1.foo4()(); // person1(箭头函数不绑定this, 上层作用域this是person1)
// person1.foo4.call(person2)(); // person2(上层作用域被显示的绑定了一个person2)
// person1.foo4().call(person2); // person1(上层找到person1)
```

第三题

```javascript
var name = 'window'

function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() // person1
person1.foo1.call(person2) // person2(显示高于隐式绑定)

person1.foo2() // person1 (上层作用域中的this是person1)
person1.foo2.call(person2) // person1 (上层作用域中的this是person1)

person1.foo3()() // window(独立函数调用)
person1.foo3.call(person2)() // window
person1.foo3().call(person2) // person2

person1.foo4()() // person1
person1.foo4.call(person2)() // person2
person1.foo4().call(person2) // person1


var obj = {
  name: "obj",
  foo: function() {

  }
}
```

第四题

```javascript
var name = 'window'

function Person (name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() // window
person1.obj.foo1.call(person2)() // window
person1.obj.foo1().call(person2) // person2

person1.obj.foo2()() // obj
person1.obj.foo2.call(person2)() // person2
person1.obj.foo2().call(person2) // obj


// 

// 上层作用域的理解
// var obj = {
//   name: "obj",
//   foo: function() {
//     // 上层作用域是全局
//   }
// }

// function Student() {
//   this.foo = function() {

//   }
// }
```

## 手写apply_call_bind函数

### call

在实现call之前，需要先讲一个语法 -- es6的剩余参数

```javascript
// rest parameters
function sum(...nums) {
  console.log(nums);
}
sum(10);
sum(10, 20);
sum(10, 20, 30);
sum(10, 20, 30, 40);

// 展开运算符 spread
var names = ["aba", "dss", "qwe"];

var newNames = [...names];

function foo(num1,num2,num3) {

}

foo(...names)

```

开始手写

```javascript
// 给所有的函数添加一个hycall方法
Function.prototype.hycall = function (thisArg, ...args) {
  // 1.获取到哪一个函数执行了hycall
  var fn = this;

  // 2.对thisArg转成对象类型（防止它传入的是非对象类型）
  thisArg = thisArg ? Object(thisArg) : window;

  // 3.调用需要被执行的函数
  thisArg.fn = fn;
  var result = thisArg.fn(...args);
  delete thisArg.fn;

  // 4.将最终的结果返回出去
  return result;
};

function foo(num1, num2) {
  console.log("foo函数被执行", this);
}

function sum(num1, num2) {
  console.log("sum函数被执行", this, num1, num2);
  return num1 + num2;
}

//系统的函数的call方法
// foo.call(123);
// foo.call({ name: "zzb" });
// foo.call(null);
// foo.call(undefined);

// 自己实现的hycall方法
// foo.hycall(123);
// foo.hycall({ name: "zzb" });
// foo.hycall(null);
// foo.hycall(undefined);
var res = sum.hycall("abc", 100, 200);
console.log(res);
// sum.hycall();

```



### apply

```javascript
Function.prototype.hyapply = function (thisArg, argArray) {
  //1.获取到要执行的函数
  var fn = this;

  //2.处理绑定的thisArg
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  //3。执行函数
  thisArg.fn = fn;
  var result;
  // 解决无参方式一
  //   if (!argArray) result = thisArg.fn();
  //   else thisArg.fn(...argArray);
  // 解决无参方式二
  argArray = argArray ? argArray : [];

  result = thisArg.fn(...argArray);
  delete thisArg.fn;

  return result;
};

function sum(num1, num2) {
  console.log("sum被调用", this, num1, num2);
  return num1 + num2;
}

function foo(num) {
  console.log("foo被调用", this, num);
  return num;
}

function bar() {
  console.log("bar函数被执行", this);
}

// 系统调用
var result = sum.apply(0, [20, 30]);
// console.log(result);

// 自己实现的调用
// var result = sum.hyapply("abc", [20, 30]);
// console.log(result);

// foo.hyapply("abc",[20])
// bar.hyapply("abc");
// console.log(bar.hyapply("abc"));

```



### bind

```javascript
Function.prototype.hybind = function (thisArg, ...argArray) {
  // 1.获取到真实需要调用的函数
  var fn = this;

  // 2.绑定this
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  function proxyFn(...args) {
      // 3. 将函数放到thisArg中进行调用
    thisArg.fn = fn;
    var finalArgs = [...argArray, ...args];
    var result = thisArg.fn(...finalArgs);
    delete thisArg.fn;
    // 4.返回结果
    return result;
  }

  return proxyFn;
};

function foo() {
  console.log("foo被执行", this);
  return 20;
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4);
}

// 系统的bind使用
// var bar = foo.bind("abc");
// bar();

// var newSum = sum.bind("aaa",1,2);
// newSum(3,4);

// 使用自己定义的bind
// var bar = foo.hybind("sss");
// var result = bar();
// console.log(result);

var newSum = sum.hybind("aaa",1,2);
newSum(3,4);
```

## arguments

### 基本使用

```javascript
// var ao = {
//   num1: undefined,
//   num2: undefined,
//   arguments,
// };

function foo(num1, num2, num3) {
  // 类数组对象中（长得项式一个数组，本质上是一个对象）:arguments
  console.log(arguments);

  // 常见的对auguments的操作是三个
  //1.获取参数的长度
  console.log(arguments.length);

  //2.根据索引值获取某一个参数
  console.log(arguments[2]);
  console.log(arguments[3]);
  console.log(arguments[4]);

  //3.callee获取当前arguments所在的函数
  console.log(arguments.callee);
}

foo(10, 20, 30, 40, 50);
```

### arguments转array的几种用法及其原理

```javascript
function foo(num1, num2) {
  var newArray = [];
  //1.自己遍历
  //   for (var i = 0; i < arguments.length; i++) {
  //     newArray.push(arguments[i] * 10);
  //   }
  //   console.log(newArray);

  //2. arguments转成array类型
  //2.1 自己遍历arguments中所有的元素
  //上面就是这么实现的

  //2.2 将arguments转成array
  var newArray2 = Array.prototype.slice.call(arguments, 1, 4);
  // 下面这种也可以拿到slice
  var newArray3 = [].slice.call(arguments, 1, 4);

  // 2.3 es6的语法
  var newArray4 = Array.from();
  console.log(newArray4);
  var newArray5 = [...arguments];
}

console.log(foo(10, 20, 30, 40, 50));

// 补充 slice方法的原理

// Array中的slice实现 slice原理
// Array.prototype.hyslice = function (start, end) {
//   // 拿到aruguments,方式是通过绑定this
//   var arr = this;
//   start = start || 0;
//   end = end || arr.length;
//   var newArray = [];
//   for (var i = start; i < end; i++) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// };

// var newArray = Array.prototype.hyslice.call(["asd", "qwe", "zzz"], 1, 3);
// console.log(newArray);

```

### 箭头函数中没有arguments以及es6之后推荐的...args

```javascript
// 案例一
// var foo = () => {
//   console.log(arguments);

// };
// // arguments往上找 node上层有 浏览器没有
// // node执行值包在一个函数里面执行的 所以有arguments
// foo()

// function bar() {
//   console.log(arguments);
// }
// bar();

// 案例二
// 展示去上层找qrguments
// function foo() {
//   var bar = () => {
//     console.log(arguments);
//   };
//   return bar;
// }
// var fn = foo(123);
// fn();

// 案例三
//现在不推荐arguments es6之后用..args
function foo(num1, num2, ...args) {
  console.log(args);
}

foo(10, 20, 30, 40, 50);

```

