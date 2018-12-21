function sumDigPow(a, b) {
  return Array.from({length: b - a + 1})
    .map((_, i) => i + a)
    .filter(num => {
      const sum = String(num).split('')
        .map(Number)
        .reduce((s, n, j) => s + Math.pow(n, j + 1), 0);
      return num === sum;
    });
}
