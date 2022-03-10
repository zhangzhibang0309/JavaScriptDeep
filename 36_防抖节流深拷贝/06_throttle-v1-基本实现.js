function throttle(fn, interval) {
  let lastTime = 0;

  const _throttle = function () {
    const nowTime = new Date().getTime();
    const remainTime = interval - (nowTime - lastTime);

    if (remainTime <= 0) {
      fn();
      lastTime = nowTime;
    }
  };

  return _throttle;
}
