const arr = [1, 2, 3, 4, 5, 6];
const obj = {
  a: 'a'
}
arr.forEach(function () {
  console.log('this', this);
}, obj)