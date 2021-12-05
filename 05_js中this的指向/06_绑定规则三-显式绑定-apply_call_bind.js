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