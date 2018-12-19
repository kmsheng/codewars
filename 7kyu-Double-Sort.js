function dbSort(arr) {
  return arr.filter(a => typeof a === 'number')
    .sort((a, b) => a - b)
    .concat(arr.filter(a => typeof a === 'string').sort());
}
