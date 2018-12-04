function SeriesSum(n) {
  let num = 0;
  for (let i = 0; i < n; i++) {
    num += 1 / (3 * i + 1)
  }
  let s = String(Math.round(num * 100) / 100);
  if (! s.includes('.')) {
    s += '.';
  }
  const dotIndex = s.indexOf('.');
  return s + '0'.repeat(dotIndex + 3 - s.length);
}
