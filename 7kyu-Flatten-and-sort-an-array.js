function flattenAndSort(arr) {
  return [].concat(...arr).sort((a, b) => a - b);
}
