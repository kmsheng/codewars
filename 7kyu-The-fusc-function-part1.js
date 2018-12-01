function fusc(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  if (n % 2 === 0) {
    return fusc(n / 2);
  }
  const half = (n - 1) / 2;
  return fusc(half) + fusc(half + 1);
}
