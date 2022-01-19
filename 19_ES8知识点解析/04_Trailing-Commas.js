// 在ES8之前 多个参数后面不能加， 但是现在已经不会报错了
function foo(m, n,) {
  console.log("foo");
}

foo(1,2)