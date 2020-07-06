/**
 * 特点：
 *  1.改变this指向
 *  2.函数执行，参数可传递数组
 */
Function.prototype.apply = function (context, args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a function`)
  }
  context = Object(context || window);
  context.fn = this;
  let result;
  if (args) {
    result = context.fn(...args);
  } else {
    result = context.fn()
  }
  delete context.fn;
  return result;
}