function foo() {

}

// 函数也是一个对象
console.log(foo.__proto__) // 函数作为对象来说，它也是有[[prototype]] 隐式原型

// 函数它因为还是一个函数，所以还会多出来一个显式原型：prototype、
console.log(foo.prototype)