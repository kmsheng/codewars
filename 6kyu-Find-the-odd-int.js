function findOdd(arr) {

  const map = arr.reduce((obj, num) => {
    if (undefined === obj[num]) {
      obj[num] = 0;
    }
    obj[num]++;
    return obj;
  }, {});

  const key = Object.keys(map)
    .filter(num => {
      return map[num] % 2 !== 0;
    })[0];

  return parseInt(key, 10);
}
