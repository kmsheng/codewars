function positiveSum(arr) {
  return arr.filter(num => num > 0)
    .reduce((sum, curr) => sum + curr, 0);
}
