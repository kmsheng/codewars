function broken(str) {
  return str.split('')
    .map(char => (char === '1') ? '0' : '1')
    .join('');
}
