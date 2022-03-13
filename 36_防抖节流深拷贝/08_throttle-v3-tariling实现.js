function throttle(fn, interval, options = { leading: true, trailing: false }) {
  // 默认leading是true

  const { leading, trailing } = options;
  let lastTime = 0;
  let timer = null;

  // 这个函数会被返回，绑定到某个事件上面，比如oninput
  const _throttle = function () {
    const nowTime = new Date().getTime();

    // 检测是否是第一次，以及leading是否是false
    // 满足条件，第一次不加载，让lastTime = nowT ime，算出来第一次interval是0
    if (lastTime === 0 && leading === false) lastTime = nowTime;

    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      // 当我们这次的事件触发执行了fn，那么就不需要设置一个定时器了
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      // 真正需要执行的函数
      fn();
      // 上面说了，要更新一下lastTime，让它等于此刻的时间
      lastTime = nowTime;

      return;
    }

    // 如果我们这时没有执行函数，也就是说还有一段时间才会到达一个interval
    // 判断如果开启trailing并且timer没有被绑定过，就去跑一个定时器
    if (trailing && !timer) {
      timer = setTimeout(() => {
        // 为下一次定时器做准备
        timer = null;
        // 下一次
        lastTime = !leading ? 0 : new Date().getTime();
        fn();
      }, remainTime);
    }
  };

  return _throttle;
}
