function rankings(arr) {

  const rankData = arr.slice()
    .sort((a, b) => b - a)
    .reduce((obj, num, i) => {
      obj[num] = i + 1;
      return obj;
    }, {});

  return arr.map(num => rankData[num]);
}
