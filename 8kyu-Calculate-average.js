function find_average(arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
