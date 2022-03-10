const btns = document.getElementsByTagName("button");

// 这就是给多个button绑定事件 然后点击的时候输出他们的索引
// 但是i因为是全局变量 你绑定完之后 当你真的触发事件的时候 i是个全局变量 这时候都是等于length-1
// 在es6块级作用域出现之前 是用闭包来解决的
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    console.log("第" + i + "个按钮被点击");
  };
}
// 闭包生成块级作用域
for (var i = 0; i < btns.length; i++) {
  (function (n) {
    // 此时的n 作用这个function的局部点变量被存储了下来 点击事件就不会有问题了
    btns[i].onclick = function () {
      console.log("第" + n + "个按钮被点击");
    };
  })(i);
}

// ES6实现很简单
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    console.log("第" + i + "个按钮被点击");
  };
}

console.log(i)