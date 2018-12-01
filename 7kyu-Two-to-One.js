function longest(s1, s2) {
  const map = (s1 + s2).split('')
    .reduce((obj, char) => {
      obj[char] = true;
      return obj;
    }, {});
  return Object.keys(map)
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join('');
}
