function countPositivesSumNegatives(input) {
  if (! input) {
    return [];
  }
  if (input.length === 0) {
    return [];
  }
  const positives = input.filter(num => num > 0);
  const sum = input.filter(num => num < 0)
    .reduce((a, b) => a + b, 0);
  return [positives.length, sum];
}
