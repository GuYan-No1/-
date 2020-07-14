/**
 * 节流，控制流量，单位时间内，事件只能触发一次，重在开关锁
 */
function throttle(cb, wait) {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(args);
      timer = null;
    }, wait)
  }
}