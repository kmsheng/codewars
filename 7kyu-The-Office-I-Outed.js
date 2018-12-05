function outed(meet, boss){
  const keys = Object.keys(meet);
  const sum = keys.reduce((s, key) => {
    s += (boss === key) ? meet[key] * 2 : meet[key];
    return s;
  }, 0);
  const avg = sum / keys.length;
  return avg <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}
