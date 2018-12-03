function tribonacci(signature, n) {
  const s = signature.slice();
  if (s.length >= n) {
    s.length = n;
    return s;
  }
  while (s.length < n) {
    const n3 = s[s.length - 1];
    const n2 = s[s.length - 2];
    const n1 = s[s.length - 3];
    s.push(n1 + n2 + n3);
  }
  return s;
}
