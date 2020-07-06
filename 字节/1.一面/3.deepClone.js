function deepClone(obj, hash = new WeakMap()) {
  if (obj == null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== 'object') return obj;
  if (hash.has(obj)) return obj;
  let cloneObj = new obj.constructor;
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
let obj = { a: 1, b: 2, c: { a: 3 } };
obj.xxx = obj;
let newObj = deepClone(obj);
obj.c.a = 5;
console.log(newObj);

// let a = { 1: 1, 2: 2, 3: 2 };
// let weakMap = new WeakMap();
// weakMap.set(a, a);
// console.log(weakMap.get(a));
