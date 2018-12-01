function digPow(n, p){
  const total = String(n).split('')
    .reduce((t, c, i) => {
      const num = parseInt(c, 10);
      return t + Math.pow(num, p + i);
    }, 0);
  const answer = total / n;
  return answer % 1 === 0 ? answer : -1;
}
