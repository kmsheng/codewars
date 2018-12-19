function squareDigitsSequence(a0) {

  const map = {[a0]: true};

  let n = 1;
  let num = a0;
  while (true) {
    n++;
    num = String(num).split('')
      .reduce((sum, str) => sum + Math.pow(parseInt(str, 10), 2), 0);

    if (map[num]) {
      break;
    }
    map[num] = true;
  }
  return n;
}
