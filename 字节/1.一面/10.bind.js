/**
 * 特点：
 *  1.绑定this的指向
 *  2.返回一个绑定后的函数
 *  3.如果绑定的函数被new 执行，当前函数的this就是当前实例
 *  4.new出来的结果可以找到原有类的原型
 */
Function.prototype.bind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a function`);
  }
  context = Object(context || window);
  const _this = this;
  const outsideArgs = [...arguments].slice(1);
  function Fn() { };
  function bindFn() {
    const insideArgs = [...arguments];
    return _this.apply(this instanceof bindFn ? this : context, outsideArgs.concat(insideArgs));
  }
  Fn.prototype = this.prototype;
  bindFn.prototype = new Fn();
  return bindFn;
}


const fn = () => { };
console.log(new fn());
