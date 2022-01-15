let foo = "foo";

{
  // 从这里
  // ReferenceError: Cannot access 'foo' before initialization
  console.log(foo);

  // 到这里 就属于暂时性死区 也就是let const在声明赋值之前 不能被访问
  let foo = "foo";
}

// 对于let const选择问题
// 如果确实数据会被修改 旧用let
// 如果不太确定 用const可以防止一些数据不小心被修改而产生的bug
