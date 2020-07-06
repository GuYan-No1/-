/**
 * 求两数组的交集
 */
function interfection(a, b) {
  return [...new Set(a)].filter(item => new Set(b).has(item));
}

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [3, 4, 5, 6, 7, 8, 9];
console.log(interfection(arr1, arr2));
