function findUniq(arr) {
  return arr.reduce((obj, num, index) => {
    const isLast = index === (arr.length - 1);
    if (typeof obj[num] === 'undefined') {
      obj[num] = 0;
    }
    obj[num]++;

    if (isLast) {
      const i = Object.values(obj).indexOf(1);
      return parseFloat(Object.keys(obj)[i]);
    }
    return obj;
  }, {});
}
