function score(d) {
  const dice = d.slice().sort((a, b) => a - b);
  const triplesChart = {1: 1000, 6: 600, 5: 500, 4: 400, 3: 300, 2: 200};
  const singlesChart = {1: 100, 5: 50};
  let points = 0;
  for (let i = 0; i < dice.length - 2; i++) {
    const [first, second, third] = dice.slice(i, i + 3);
    if ((first === second) && (second === third)) {
      points += triplesChart[first];
      dice.splice(i, 3);
      break;
    }
  }
  return dice.reduce((p, num) => Number.isInteger(singlesChart[num]) ? p + singlesChart[num] : p, points);
}

console.log(score([2, 4, 4, 5, 4]))
