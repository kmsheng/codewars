function inArray(arr1, arr2) {
  return arr1.filter(str => arr2.some(str2 => str2.includes(str))).sort();
}
