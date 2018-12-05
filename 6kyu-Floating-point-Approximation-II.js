function interp(f, l, u, n) {
  const d = (u - l) / n;
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(Math.floor(f(l + i * d) * 100.0) / 100.0);
  }
  return res;
}
