function order(words) {
  return words.split(' ')
    .sort((a, b) => {
      return parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10)
    })
    .join(' ');
}
