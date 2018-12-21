function openOrSenior(arr) {
  return arr.map(([years, handicap]) => (years >= 55 && handicap > 7) ? 'Senior' : 'Open');
}
