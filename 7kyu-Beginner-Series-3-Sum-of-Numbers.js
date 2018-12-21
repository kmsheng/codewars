function GetSum(a, b) {
  if (a > b) {
    [a, b] = [b, a];
  }
  return ((a + b) * (b - a + 1)) / 2;
}
