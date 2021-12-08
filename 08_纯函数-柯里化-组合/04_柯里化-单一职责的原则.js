// 非柯里化
function add(x, y, z) {
  x = x + 2;
  y = y + 2;
  z = z + 2;
  return x + y + z;
}

console.log(add(10, 20, 30));

// 柯里化第一个好处 单一职责性
function sum(x, y, z) {
  x = x + 2;

  return function (y) {
    y = y * 2;
    return function (z) {
      z = z * z;
      return x + y + z;
    };
  };
}

console.log(sum(10)(20)(30));
