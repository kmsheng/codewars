function geometricSequenceElements(a, r, n){
  let base = a;
  const arr = [a];
  for (let i = 1; i < n; i++) {
    base *= r;
    arr.push(base);
  }
  return arr;
}
