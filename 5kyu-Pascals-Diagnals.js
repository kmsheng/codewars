function cal(r, n) {
  if (n === 0) {
    return 1;
  }
  return cal(r, n - 1) * (r - n + 1) / n;
}

function generateDiagonal(n, l) {
  const arr = [];
  for (let i = 0; i < l; i++) {
    arr.push(cal(n + i, i));
  }
  return arr;
}
