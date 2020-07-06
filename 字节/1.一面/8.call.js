/**
 * 特点：
 *  1.改变this的指向
 *  2.执行函数
 */

Function.prototype.call = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a function`)
  }
  context = Object(context || window);
  context.fn = this;
  let args = [...arguments].slice(1);
  let result = context.fn(...args);
  delete context.fn;
  return result;
}

function test(a) {
  console.log(a);
}
const arr = [1, 2, 3, 4];
test(...arr);