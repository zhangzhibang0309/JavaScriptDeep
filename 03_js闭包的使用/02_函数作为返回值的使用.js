//函数也可以作为函数的返回值

// function foo() {
//   function bar() {
//     console.log("bar");
//   }

//   return bar;
// }

// var fn = foo();
// fn();

function makeAdder(count) {
  function add(num) {
    return count + num;
  }

  return add;
}

var add5 = makeAdder(5);
console.log(add5(6));
console.log(add5(10));

// 高阶函数：一个函数如果接收另外一个函数作为参数，或者该函数会返回另外一个函数作为返回值的函数，那么这个函数就称之为是一个高阶函数。