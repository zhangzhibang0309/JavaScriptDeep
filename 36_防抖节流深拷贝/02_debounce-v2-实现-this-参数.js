function debounce(fn, delay) {
  // 1.定义一个定时器，保存上一次的定时器
  let timer = null;

  // 2.真正执行的函数
  const _debounce = function (...args) {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer);
    // 延迟执行
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      // 这个this是这样的，本来我们用原生的话，直接传入的函数就是我们所真实去调用的。但是现在传入的函数是_debounce，也就是说这个函数内部被绑定了this -> 元素对象，fn调用的时候是独立调用没有绑定对象，所以我们将_debounce下的this绑定给fn，就可以了。
      // 其实args只有event，因为这个函数我们不是自己调用的，在调用的时候目前已知只传入了event
      fn.apply(this, args);
    }, delay);
  };

  return _debounce;
}
