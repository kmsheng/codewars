function iqTest(str) {
  const data = str.split(/\s+/)
    .map(Number)
    .reduce((obj, num, i) => {
      const key = num % 2 === 0 ? 'even' : 'odd';
      if (typeof obj[key] === 'undefined') {
        obj[key] = [];
      }
      obj[key].push(i);
      return obj;
    }, {});
  if (data['even'].length === 1) {
    return data['even'][0] + 1;
  }
  return data['odd'][0] + 1;
}
