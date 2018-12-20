function deleteDigit(n) {
  const str = String(n);
  const nums = str.split('')
    .map((_, i) => str.slice(0, i) + str.slice(i + 1))
    .map(s => parseInt(s, 10));
  return Math.max(...nums);
}
