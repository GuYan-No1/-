/**
 * 特点：
 *  1.创建一个新对象
 *  2.链接到原型
 *  3.绑定this
 *  4.返回一个对象
 */
function myNew() {
  const constructor = [].shift.call(arguments);
  const obj = Object.create({});
  obj.__proto__ = constructor.prototype;
  const r = constructor.allpy(obj, arguments);
  return r instanceof Object ? r : obj;
}