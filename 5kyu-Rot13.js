function rot13(message) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  return message.split('')
    .map(c => {
      if (/[a-zA-Z]/.test(c)) {
        const isUpperCase = (c === c.toUpperCase());
        const index = c.toLowerCase().charCodeAt(0) - 97;
        const newLetter = letters[(index + 13) % 26];
        return isUpperCase ? newLetter.toUpperCase() : newLetter;
      }
      return c;
    })
    .join('');
}
