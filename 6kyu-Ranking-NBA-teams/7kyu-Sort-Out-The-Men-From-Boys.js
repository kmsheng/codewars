function menFromBoys(arr) {
  const uniqArr = uniq(arr);
  const men = uniqArr.filter(num => num % 2 === 0).sort((a, b) => a - b);
  const boys = uniqArr.filter(num => num % 2 !== 0).sort((a, b) => b - a);
  return [...men, ...boys];
}

function uniq(arrArg) {
  return arrArg.filter((elem, pos, arr) => arr.indexOf(elem) === pos);
}
