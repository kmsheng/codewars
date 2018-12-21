function digitize(n) {
  return String(n).split('')
    .map(char => parseInt(char, 10))
    .reverse();
}
