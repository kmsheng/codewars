function expandedForm(num) {
  const str = String(num);
  return str.split('')
    .map((char, i) => {
      if (char === '0') {
        return '';
      }
      return char + '0'.repeat(str.length - i - 1);
    })
    .filter(stuff => stuff)
    .join(' + ');
}

console.log(expandedForm(12))
