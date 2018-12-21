function descendingOrder(n) {
  const str = String(n).split("")
    .map(char => parseInt(char, 10))
    .sort((a, b) => b - a)
    .join('');
  return parseInt(str, 10);
}
