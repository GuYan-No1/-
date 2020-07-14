// Array.prototype.forEach = function (cb, context) {
//   if (!this instanceof Array || typeof cb !== 'function') return;
//   let arr = Array.prototype.slice.call(this);
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr[i]) continue;
//     cb.call(context, arr[i], i, arr);
//   }
// }
// const a = [1, 2, 3, , 4, , 5];
// let index = 0;
// const result = a.forEach(() => {
//   index++;
// });

const Promise = require("./12.promise");

// let sym = Symbol('My Symbol');
// console.log(sym.toString());
// console.log(String(sym));
// console.log(sym.description);


// class MyClass {
//   [Symbol.hasInstance](foo) {
//     console.log('foo', foo);
//     return foo instanceof Array;
//   }
// }
// console.log([1, 2, 3] instanceof new MyClass());


// class Even {
//   static [Symbol.hasInstance](obj) {
//     return Number(obj) % 2 === 0;
//   }
// }

// console.log(1 instanceof Even);
// console.log(2 instanceof Even);

// let arr1 = ['c', 'd'];
// let result = ['a', 'b'].concat(arr1, 'e');
// console.log(arr1[Symbol.isConcatSpreadable]);
// console.log('result', result);

// let arr2 = ['c', 'd'];
// arr2[Symbol.isConcatSpreadable] = false;

// result = ['a', 'b'].concat(arr2, 'e');
// console.log('result', result);


// class MyArray extends Array {
//   static get [Symbol.species]() {
//     return Array;
//   }
// }
// const a = new MyArray(1, 2, 3);
// const b = a.map(x => x);
// const c = a.filter(x => x > 1);
// console.log('b', b);
// console.log('c', c);


// let arr = [1, 2, 3];
// let result = arr.push(5);
// console.log('result', result);
// console.log('arr', arr);

// let arr1 = [1, 2, 3, 4];
// let result = arr1.pop();
// console.log('result', result);
// console.log('arr1', arr1);

// let arr2 = [1, 2, 3, 4, 5];
// let result = arr2.unshift(0);
// console.log('result', result);
// console.log('arr2', arr2);

// let arr3 = [1, 2, 3, 4, 5];
// let result = arr3.shift();
// console.log('result', result);
// console.log('arr3', arr3);

// let arr4 = [1, 2, 3, 4, 5];
// let result = arr4.splice(0, 2, 5);
// console.log('result', result);
// console.log('arr4', arr4);

// let arr5 = [5, 2, 3, 1, 4, 6, 12, 10, 11];
// let result = arr5.sort((a, b) => a - b);
// console.log('result', result);
// console.log('arr5', arr5);

// let arr6 = [1, 2, 3, 4, 5, 6];
// let result = arr6.reverse();
// console.log('result', result);
// console.log('arr6', arr6);

// console.log(Array.prototype);

// let arr7 = [1, 2, 3, 4, 5, 6];
// let result = arr7.copyWithin(0, 3, 4);
// console.log('result', result);
// console.log('arr7', arr7);

// let arr8 = [1, 2, 3, 4, 5, 6];
// let result = arr8.entries();
// result.next()
// console.log('result', result.next());
// console.log('arr8', arr8);

// let arr9 = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = arr9.every((item, index, arr) => {
//   return item < 10;
// });
// console.log('arr9', arr9);
// console.log('result', result);

// let arr10 = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = arr10.fill(0, 3, 5);
// console.log('result', result);
// console.log('arr10', arr10);

// let arr11 = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = arr11.filter((item) => item > 3);
// console.log('result', result);
// console.log('arr11', arr11);


// let arr12 = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = arr12.find((item) => item > 11);
// console.log('result', result);
// console.log('arr12', arr12);


// let arr13 = [1, 2, 3, 4, 5, 6, 7, 8,];
// let result = arr13.findIndex((item) => item > 10);
// console.log('result', result);
// console.log('arr13', arr13);

// let arr14 = [1, 2, [3, 4, []], 7, 8];
// let result = arr14.flat(2);
// console.log('result', result);
// console.log('arr14', arr14);

// Array, prototype.flat = function flatDeep(arr, d = 1) {
//   return d > 0 ?
//     arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatDeep(b, d - 1) : b), [])
//     : arr.slice();
// }

// let arr15 = ['it’s is Sunny in', '', 'China'];
// let result = arr15.map(x => x.split(' '));
// let result1 = arr15.flatMap(x => x.split(' '));
// console.log('result', result);
// console.log('result1', result1);
// console.log('arr15', arr15);

// let arr16 = [5, 4, -3, 20, 17, -33, -4, 18]
// let result = arr16.flatMap((n) =>
//   (n < 0) ? [] :
//     (n % 2 == 0) ? [n] :
//       [n - 1, 1]
// )
// let result1 = arr16.map((n) =>
//   (n < 0) ? [] :
//     (n % 2 == 0) ? [n] :
//       [n - 1, 1]
// )
// console.log('result', result);
// console.log('result1', result1);
// console.log('arr16', arr16);

// let arr17 = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = arr17.includes(10);
// console.log('result', result);
// console.log('arr17', arr17);

// let arr18 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr18.join('-');
// console.log('result', result);
// console.log('arr18', arr18);

// let arr19 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr19.keys();
// console.log('result', result);
// console.log('arr19', arr19);

// let arr20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = arr20.reduce((a, b) => a + b, 0);
// console.log('result', result);
// console.log('arr20', arr20);

// /**
//  * conccat
//  *
//  */


// let obj = { a: '1', b: '2' };
// for (let key in obj) {
//   console.log(key);
// }
// function myNew() {
//   const constructor = [].prototype.shift.call(arguments);
//   const obj = Object.create({});
//   obj.__proto__ = constructor.prototype;
//   const result = constructor.apply(obj, arguments);
//   return result instanceof Object ? result : obj;
// }



// function myNew() {
//   const constructor = [].shift.call(arguments);
//   const obj = Object.create({});
//   obj.__proto__ = constructor.prototype;
//   const r = constructor.apply(obj, arguments);
//   return r instanceof Object ? r : obj;
// }

// Function.prototype.call = function (context) {
//   if (typeof this !== 'function') {
//     throw new TypeError(`${this} is not a function`);
//   }
//   context = Object(context || window);
//   context.fn = this;
//   const args = Array.prototype.slice.call(arguments, 1);
//   const result = context.fn(...args);
//   delete context.fnl
//   return result;
// }

// Function.prototype.apply = function (context, args) {
//   if (typeof this !== 'function') {
//     throw new TypeError(`${this} is not a function`);
//   }
//   context = Object(context || window);
//   context.fn = this;
//   let result;
//   if (args) {
//     result = context.fn(...args);
//   } else {
//     result = context.fn();
//   }
//   delete context.fn;
//   return result;
// }

// Function.prototype.bind = function (context) {
//   if (typeof this !== 'function') {
//     throw new TypeError(`${this} is not a function`);
//   }
//   const _this = this;
//   const outsideArgs = [...arguments].slice(1);
//   function Fn() { };
//   function bindFn() {
//     const insideArgs = [...arguments].slice();
//     return _this.apply(this instanceof bindFn ? this : context, outsideArgs.concat(insideArgs));
//   }
//   Fn.prototype = _this.prototype;
//   bindFn.prototype = new Fn();
//   return bindFn;
// }


// new Promise((resolve, reject) => {
//   console.log(1);
//   reject(new Error('王闯'));
//   resolve(1);
//   console.log(2);
// }).then(data => {
//   console.log('data', data);
// }).catch((e) => {
//   console.log('eee', e);
// });
// console.log(3);c


setTimeout(() => {
  console.log(1);
  process.nextTick(() => {
    console.log(3);
    process.nextTick(() => {
      console.log(4);
      process.nextTick(() => {
        console.log(5);
        process.nextTick(() => {
          console.log(6);
        })
      })
    })
  })
}, 100);

setTimeout(() => {
  console.log(2);
}, 1000);

