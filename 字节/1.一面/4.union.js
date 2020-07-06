/**
 * 求两数组的并集
 */
function union(a, b) {
  return [...new Set([...a, ...b])];
}
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(union(arr1, arr2));
