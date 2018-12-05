function meeting(arr, need) {
  if (0 === need) {
    return 'Game On';
  }
  let chairNeeded = need;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    const [occupantStr, chairCount] = arr[i];
    const availableChairCount = chairCount - occupantStr.length;

    if (availableChairCount <= 0) {
      res.push(0);
      continue;
    }
    if (availableChairCount >= chairNeeded) {
      res.push(chairNeeded);
      return res;
    }
    chairNeeded -= availableChairCount;
    res.push(availableChairCount);
  }
  if (chairNeeded > 0) {
    return 'Not enough!';
  }
  return res;
}
