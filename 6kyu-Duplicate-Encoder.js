function duplicateEncode(word) {
  const chars = word.split('').map(c => c.toLowerCase());
  const map = chars.reduce((obj, char) => {
      if (typeof obj[char] === 'undefined') {
        obj[char] = 0;
      }
      obj[char] += 1;
      return obj;
    }, {});
  return chars.map(c => map[c] === 1 ? '(' : ')')
    .join('');
}
