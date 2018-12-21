function sumTwoSmallestNumbers(numbers) {
  const arr = numbers.slice().sort((a, b) => a - b);
  return arr[0] + arr[1];
}
