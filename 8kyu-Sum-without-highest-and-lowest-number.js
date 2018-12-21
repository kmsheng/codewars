function sumArray(a) {
  const arr = a || [];
  if (arr.length <= 1) {
    return 0;
  }
  return arr.slice().sort((a, b) => a - b).slice(1, -1)
    .reduce((sum, num) => sum + num, 0);
}
