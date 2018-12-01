function findOutlier(integers) {
  const odds = integers.filter(n => n % 2 !== 0);
  const evens = integers.filter(n => n % 2 === 0);
  return odds.length === 1 ? odds[0] : evens[0];
}
