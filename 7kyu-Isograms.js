function isIsogram(str) {
  return str.split('')
    .reduce((m, c) => {
      m.set(c.toLowerCase(), true);
      return m;
    }, new Map()).size === str.length;
}
