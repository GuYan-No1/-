function getAge(n) {
  let i = 1;
  while (i * (i + 1) < 2 * n) {
    i++;
  };
  return i;
}
console.log(getAge(253));
