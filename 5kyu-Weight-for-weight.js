function orderWeight(line) {
  return line.split(/\s+/)
    .map(str => {
      const sum = str.split('')
        .map(char => parseInt(char, 10))
        .reduce((total, curr) => total + curr, 0);
      return {str, sum};
    })
    .sort((a, b) => {
      if (a.sum === b.sum) {
        return a.str.localeCompare(b.str);
      }
      return a.sum - b.sum;
    })
    .map(row => row.str)
    .join(' ');
}
