function boredom(staff) {
  const scoreData = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25
  };
  const score = Object.values(staff)
    .reduce((s, v) => s + scoreData[v], 0);

  if (score <= 80) {
    return 'kill me now';
  }
  if ((80 < score) && (score < 100)) {
    return 'i can handle this';
  }
  return 'party time!!';
}
