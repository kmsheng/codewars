function alphabetPosition(text) {
  return text.toLowerCase()
    .split('')
    .filter(char => /[a-z]/.test(char))
    .map(char => char.charCodeAt(0) - 96)
    .join(' ');
}
