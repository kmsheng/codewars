function persistence(num) {

  if (num < 10) {
    return 0;
  }

  let times = 0;

  function multiply(n) {
    times++;
    const nextNum = String(n).split('')
      .reduce((a, b) => a * b);

    if (nextNum < 10) {
      return nextNum;
    }
    return multiply(nextNum);
  }
  multiply(num);
  return times;
}
