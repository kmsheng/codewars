function longestPalindrome(str) {

  const map = str.toLowerCase()
    .split('')
    .filter(char => /^[a-z0-9]$/.test(char))
    .reduce((o, char) => {
      if (typeof o[char] === 'undefined') {
        o[char] = 0;
      }
      o[char]++;
      return o;
    }, {});

  const length = Object.keys(map)
    .filter(key => map[key] % 2 === 0 || (map[key] > 2))
    .reduce((total, curr) => {
      const count = map[curr];
      return count % 2 === 0 ? total + count : total + count - 1;
    }, 0);

  return (length < str.length) ? length + 1 : length;
}
