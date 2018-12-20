function get(i, j, data) {
  if (typeof data[i] === 'undefined') {
    return '';
  }
  return data[i][j] || '';
}

function countBees(i, j, hive) {
  const bee1 = get(i, j, hive) + get(i, j + 1, hive) + get(i, j + 2, hive);
  const bee2 = get(i, j, hive) + get(i, j - 1, hive) + get(i, j - 2, hive);
  const bee3 = get(i, j, hive) + get(i - 1, j, hive) + get(i - 2, j, hive);
  const bee4 = get(i, j, hive) + get(i + 1, j, hive) + get(i + 2, j, hive);
  return [bee1, bee2, bee3, bee4].filter(b => b === 'bee').length;
}

function howManyBees(h) {
  const hive = h || [];
  let count = 0;
  for (let i = 0; i < hive.length; i++) {
    for (let j = 0; j < hive[i].length; j++) {
      if (hive[i][j] === 'b') {
        count += countBees(i, j, hive);
      }
    }
  }
  return count;
}
