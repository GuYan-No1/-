// function MinStark() {
//   this.stark = [];
//   this.min = Number.MAX_VALUE;
// };

// MinStark.prototype.push = function (x) {
//   const min = this.min;
//   if (x < min) {
//     this.min = x;
//   }
//   this.stark.push(x - min);
// }

// MinStark.prototype.pop = function () {
//   const min = this.min;
//   const current = this.stark.pop();
//   if (current < 0) {
//     this.min = min
//   };
//   return current + min;
// }

// function fn(num1, num2) {
//   let stack = [];
//   let dicMap = new Map();
//   for (let i = 0; i < num2.length; i++) {
//     const current = num2[i];
//     while (stack.length && current > stack[stack.length - 1]) {
//       dicMap.set(stack.pop(), current)
//     }
//     stack.push(current)
//   };
//   return num1.map(item => (dicMap.get(item) || -1));
// }
// console.log(fn(null, [1, 4, 2, 3, 5]));

function removeOuterParentheses(S) {
  let result = '';
  let times = 0;
  let start = 0;
  for (let i = 0; i < S.length; i++) {
    const current = S[i];
    if (current === '(') {
      times++;
    } else {
      if (--times === 0) {
        result += S.slice(start + 1, i);
        start = i + 1;
      }
    }
  };
  console.log(result);
  return result;
};
removeOuterParentheses('(()())(())');
removeOuterParentheses('(()())(())(()(()))');
removeOuterParentheses('()()');