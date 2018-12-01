function duplicateCount(text){

  const map = text.split('')
    .reduce((obj, char) => {
      const c = char.toLowerCase();
      if (undefined === obj[c]) {
        obj[c] = 0;
      }
      obj[c]++;
      return obj;
    }, {});

  return Object.keys(map)
    .filter((c) => map[c] > 1).length;
}
