Array.prototype.forEach = function (cb, context) {
  if (!this instanceof Array || typeof cb !== 'function') return;
  let arr = Array.prototype.slice.call(this);
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) continue;
    cb.call(context, arr[i], i, arr);
  }
}
const a = [1, 2, 3, , 4, , 5];
let index = 0;
const result = a.forEach(() => {
  index++;
});

