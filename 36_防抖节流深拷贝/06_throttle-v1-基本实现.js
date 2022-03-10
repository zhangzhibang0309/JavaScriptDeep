function throttle(fn, interval) {
  // 记录上一次触发事件的时间，只有第一次赋值的时候会执行，后面lastTimer只会在remainTime <= 0之后被赋值
  const { leading, trailing } = options;
  let lastTime = 0;

  // 这个函数会被返回，绑定到某个事件上面，比如oninput
  const _throttle = function () {
    // 拿到当前时间
    const nowTime = new Date().getTime();

    // 剩余多长时间执行 = 设置好的间隔 - （现在的时间 - 上次触发事件的事件）
    const remainTime = interval - (nowTime - lastTime); // 第一次执行或者是间隔了一段时间再次执行的话，一去触发事件会立马执行，将数据带入这个公式仔细算一下就知道，这两种情况下，remainTime是负数（因为nowTime这个时间戳巨大）

    // 如果remainTime <= 0了，说明现在已经距离上次事件触发经过一个interval了，而且直到目前位置，还有事件在不断尝试触发，所i一应该进行下一次事件触发了
    if (remainTime <= 0) {
      // 真正需要执行的函数
      fn();
      // 上面说了，要更新一下lastTime，让它等于此刻的时间
      lastTime = nowTime;
    }
  };

  return _throttle;
}
