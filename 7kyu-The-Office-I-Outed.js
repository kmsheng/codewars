function outed(meet, boss){
  let sum = 0;
  const keys = Object.keys(meet);
  for (const key of keys) {
    sum += (boss === key) ? meet[key] * 2 : meet[key];
  }
  const avg = sum / keys.length;
  return avg <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}
