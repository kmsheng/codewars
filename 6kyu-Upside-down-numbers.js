function solve(x, y) {
  let count = 0;
  for (let i = x; i <= y; i++) {
    const str = String(i);
    const match = str.substring(0, Math.ceil(str.length / 2))
      .split('')
      .every((char, index) => isUpsideDown(char, index, str));

    if (match) {
      count++;
    }
  }
  return count;
}

function isUpsideDown(char, i, str) {
  const mirrorChar = str[str.length - 1 - i];
  if (/^[018]$/.test(char) && (char === mirrorChar)) {
    return true;
  }
  return (char === '9' && mirrorChar === '6') ||
    (char === '6' && mirrorChar === '9');
}
