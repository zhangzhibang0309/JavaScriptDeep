function throttle(fn, interval, options = { leading: true, trailing: false }) {
  // 默认leading是true

  const { leading, trailing } = options;
  let lastTime = 0;

  // 这个函数会被返回，绑定到某个事件上面，比如oninput
  const _throttle = function () {
    const nowTime = new Date().getTime();

    // 检测是否是第一次，以及leading是否是false
    // 满足条件，第一次不加载，让lastTime = nowT ime，算出来第一次interval是0
    if (lastTime === 0 && leading === false) lastTime = nowTime;

    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      // 真正需要执行的函数
      fn();
      // 上面说了，要更新一下lastTime，让它等于此刻的时间
      lastTime = nowTime;
    }
  };

  return _throttle;
}
