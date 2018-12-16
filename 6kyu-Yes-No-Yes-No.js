function yesNo(a) {
  const arr = a.slice();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      res.push(arr[i]);
    }
    else {
      arr.push(arr[i]);
    }
  }
  return res;
}
