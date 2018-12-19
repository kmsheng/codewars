function myLanguages(obj) {
  return Object.keys(obj)
    .filter(prop => obj[prop] >= 60)
    .sort((a, b) => obj[a] < obj[b]);
}
