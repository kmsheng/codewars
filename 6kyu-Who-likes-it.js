function likes(names) {
  const [first, second, third] = names;
  const length = names.length;
  if (length === 0) {
    return 'no one likes this';
  }
  if (length === 1) {
    return `${first} likes this`;
  }
  if (length === 2) {
    return `${first} and ${second} like this`;
  }
  if (length === 3) {
    return `${first}, ${second} and ${third} like this`;
  }
  return `${first}, ${second} and ${length - 2} others like this`;
}
