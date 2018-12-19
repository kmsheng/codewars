function bald(x) {
  const outputs = ['Clean!', 'Unicorn!', 'Homer!'];
  const hairs = (x.match(/\//g) || []).length;
  let output = outputs[hairs];
  if (hairs > 5) {
    output = 'Hobo!';
  }
  else if ((3 <= hairs) && (hairs <= 5)) {
    output = 'Careless!';
  }
  return [x.replace(/\//g, '-'), output];
}
