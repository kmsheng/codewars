function firstNonRepeatingLetter(s) {
  if (s === '') {
    return s;
  }
  const len = s.length;
  const seen = {};
  for (let i = 0; i < len; i++) {
    const char = s[i];
    let repeated = false
    for (let j = i + 1; j < len; j++) {
      if (char.toLowerCase() === s[j].toLowerCase()) {
        repeated = true;
        break;
      }
    }
    if ((! repeated) && (! seen[char.toLowerCase()])) {
      return char;
    }
    seen[char.toLowerCase()] = true;
  }
  return '';
}
