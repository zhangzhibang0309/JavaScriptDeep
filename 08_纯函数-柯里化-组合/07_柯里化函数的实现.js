function add1(x, y, z) {
  return x + y + z;
}

function add2(x, y, z) {
  x = x + 2;
  y = y + 2;
  z = z + 2;
  return x + y + z;
}

function makeAdder(count) {
  count = count * count;
  return function (num) {
    return count + num;
  };
}

function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes}][${type}]:[${message}]`);
}

// 柯里化函数的实现hyCurrying
function hyCurrying(fn) {
  function curried(...args) {
    // 判断当前已经接收到的参数的个数 和参数本身需要接收的阐述是否已经一致了
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      // 没有达到个数时，需要返回一个新的函数，继续来接收参数
      function curried2(...args2) {
        // 接收到参数后，需要递归调用curried来检查函数的个数是否达到
        return curried.apply(this, [...args, ...args2]);
      }
      return curried2;
    }
  }

  return curried;
}

var curryAdd = hyCurrying(add1);
console.log(curryAdd(10, 20, 30));
console.log(curryAdd(10)(20, 30));
console.log(curryAdd(10)(20)(30));
const temp = curryAdd(10)
console.log(temp(20,30))
