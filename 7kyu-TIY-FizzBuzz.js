function tiyFizzBuzz(sentence) {
  return sentence.split('')
    .map(char => {
      if (/[AEIOU]/.test(char)) {
        return 'Iron Yard';
      }
      if (/[aeiou]/.test(char)) {
        return 'Yard';
      }
      if (/[BCDFGHJKLMNPQRSTWXYZ]/.test(char)) {
        return 'Iron';
      }
      return char;
    })
    .join('');
}
