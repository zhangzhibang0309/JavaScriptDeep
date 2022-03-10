function debounce(fn, delay, immediate, resultCallback) {
  // 1.定义一个定时器，保存上一次的定时器
  let timer = null;
  let isInvoke = false;

  // 2.真正执行的函数
  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      // 取消上一次的定时器
      if (timer) clearTimeout(timer);

      if (immediate && !isInvoke) {
        // 拿到result
        const result = fn.apply(this, args);
        // 第一种方式
        if (resultCallback) resultCallback(result);
        // 第二种方式
        resolve(result);

        isInvoke = true;
      } else {
        // 延迟执行
        timer = setTimeout(() => {
          // 拿到result
          const result = fn.apply(this, args);
          // 第一种方式
          if (resultCallback) resultCallback(result);
          // 第二种方式
          resolve(result);

          isInvoke = false;
          timer = null;
        }, delay);
      }
    });
  };

  // 封装取消按钮
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    isInvoke = false;
  };

  return _debounce;
}
