function wave(str) {
  return Array.from({length: str.length})
    .map((elem, i) => str.substring(0, i) + str.substring(i, i + 1).toUpperCase() + str.substring(i + 1))
    .filter(str => /[A-Z]/.test(str));
}
