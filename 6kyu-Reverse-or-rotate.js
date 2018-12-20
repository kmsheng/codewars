function revrot(str, sz) {
  if (sz === 0) {
    return '';
  }
  return (str.match(new RegExp(`.{1,${sz}}`, 'g')) || [])
    .filter(chunk => chunk.length === sz)
    .map(chunk => {
      const chars = chunk.split('');
      const sum = chars.map(c => parseInt(c, 10))
        .reduce((prev, curr) => prev + curr);
      if (sum % 2 == 0) {
        return chars.reverse().join('');
      }
      return chunk.slice(1) + chunk[0];
    })
    .join('');
}
