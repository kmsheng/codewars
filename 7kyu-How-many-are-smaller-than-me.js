function smaller(arr) {
  const res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let count = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
    res.push(count);
  }
  res.push(0);
  return res;
}
