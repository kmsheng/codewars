function topThreeWords(text) {
  const record = text.toLowerCase()
    .split(/[^a-zA-Z']/)
    .filter(word => word.length > 0 && /[a-zA-Z]/.test(word))
    .reduce((obj, word) => {
      if (! (word in obj)) {
        obj[word] = 0;
      }
      obj[word]++;
      return obj;
    }, {});

  let rows = Object.keys(record)
    .map(word => ({word, count: record[word]}))
    .sort((a, b) => b.count - a.count);

  rows.length = 3;

  rows = rows.filter(row => !! row);

  return rows.map(row => row.word);
}
