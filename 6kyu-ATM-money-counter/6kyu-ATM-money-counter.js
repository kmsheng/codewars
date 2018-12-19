const VALUES = require('./values');

function getCurrencyAndNumber(value) {
  const currency = value.split('').filter(c => /[a-zA-Z]/.test(c)).join('');
  const num = value.split('').filter(c => /[\d]/.test(c)).join('');
  return [currency.toUpperCase(), parseInt(num, 10)];
}

function atm(value) {

  const [currency, num] = getCurrencyAndNumber(value);

  if (! ['RUB', 'EUR', 'UAH', 'USD', 'CUP', 'SOS'].includes(currency)) {
    return `Sorry, have no ${currency}.`;
  }
  const notes = VALUES[currency];
  const strs = [];

  let noteIndex = notes.length - 1;
  let error = false;
  let money = num;

  while (noteIndex >= 0) {
    const note = notes[noteIndex];
    if (note > money) {
      noteIndex -= 1;
      continue;
    }
    const sheets = parseInt(money / note, 10);
    money = money % note;
    if (sheets > 0) {
      strs.push(`${sheets} * ${note} ${currency}`);
    }
  }
  if (noteIndex < 0) {
    noteIndex = 0;
  }
  if (money === 0) {
    return strs.join(', ');
  }
  return `Can't do ${num} ${currency}. Value must be divisible by ${notes[noteIndex]}!`;
}
