function createFnArray() {
  // js整数占据4B
  // 占据的空间是4M
  // js的number是8B 但是v8有优化 比较小的数字占32位 称为sim
  var arr = new Array(1024 * 1024).fill(1);
  return function () {
    console.log(arr.length);
  };
}

var arrayFns = [];
for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    arrayFns.push(createFnArray());
  }, i * 100);
}

setTimeout(() => {
  for (var i = 0; i < 50; i++) {
    arrayFns.pop();
  }
}, 10000);
