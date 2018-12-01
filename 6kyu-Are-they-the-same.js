function comp(arr1, arr2){
  if ((! arr1) || (! arr2)) {
    return false;
  }
  const sortedArr1 = arr1.sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);
  return sortedArr1.every((num, i) => num * num === sortedArr2[i]);
}
