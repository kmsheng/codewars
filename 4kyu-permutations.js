function permutations(string) {
  if (string.length === 1) {
    return [string];
  }
  const set = new Set();

  function explore(str, prefix = '') {
    if (str.length === 1) {
      return;
    }
    for (let i = 0; i < str.length; i++) {
      const char = prefix + str[i];
      const rest = str.substring(0, i) + str.substring(i + 1);
      const newStr = char + rest;
      set.add(newStr);
      explore(rest, char);
    }
  }
  explore(string);
  return Array.from(set);
}
