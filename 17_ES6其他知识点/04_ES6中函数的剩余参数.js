function foo(m, n, ...args) { // ...args必须放到最后
  console.log(m, n);
  console.log(args);

  // ES6的 包含所有参数 最好不用
  console.log(arguments);
}
foo(12, 30, 405, 40, 50, 60);
