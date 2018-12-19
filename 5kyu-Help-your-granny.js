function tour(friends, fTowns, distTable) {

  const towns = friends.map(f => fTowns.find(([name]) => name === f))
    .filter(t => t)
    .map(([name, town]) => town);

  const keys = distTable.filter((_, i) => i % 2 === 0);
  const values = distTable.filter((_, i) => i % 2 !== 0);
  const distMap = keys.reduce((obj, key, i) => {
    obj[key] = values[i];
    return obj;
  }, {});

  let distance = distMap[towns[0]];
  for (let i = 1; i < towns.length; i++) {
    const d1 = distMap[towns[i - 1]];
    const d2 = distMap[towns[i]];
    distance += Math.sqrt((d2 * d2) - (d1 * d1));
  }
  distance += distMap[towns[towns.length - 1]];

  return Math.floor(distance);
}
