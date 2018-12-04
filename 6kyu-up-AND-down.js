function arrange(str) {
  const words = str.split(/\s+/);
  for (let i = 0; i < words.length - 1; i++) {
    const currentLength = words[i].length;
    const nextLength = words[i + 1].length;

    if ((i % 2 === 0) && (currentLength > nextLength)) {
      let tmp = words[i];
      words[i] = words[i + 1];
      words[i + 1] = tmp;
    }
    if ((i % 2 !== 0) && (currentLength < nextLength)) {
      let tmp = words[i];
      words[i] = words[i + 1];
      words[i + 1] = tmp;
    }
  }
  return words.map((w, i) => (i % 2 === 0) ? w.toLowerCase() : w.toUpperCase())
    .join('');
}
