function findSquares(x, y) {
  if (x < y) {
    [x, y] = [y, x];
  }
  const distance = y;
  let count = 0;
  for (let d = 2; d <= distance; d++) {
    for (let j = 0; j + d <= y; j++) {
      for (let i = 0; i + d <= x; i++) {
        count += 1;
      }
    }
  }
  return count + (x * y);
}
