/**
 * 求两数组的差集
 */
Array.prototype.difference = function (arr) {
  return [... new Set(this)].filter(item => !new Set(arr).has(item));
};
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr2.difference(arr1));
