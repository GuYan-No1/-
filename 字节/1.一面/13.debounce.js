/**
 * 防抖，防止抖动，避免一次事件误认为是多次
 */
function debounce(cb, wait) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, wait)
  }
}