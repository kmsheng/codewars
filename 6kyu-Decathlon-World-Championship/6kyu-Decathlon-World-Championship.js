const pTable = require('./pTable');

function decathlon(atheletes) {

  const names = Object.keys(atheletes);
  const data = names.reduce((obj, name) => {
      obj[name] = getPoints(atheletes[name]);
      return obj;
    }, {});
  const points = Object.values(data);
  const max = points.reduce((a, b) => a > b ? a : b);
  const index = points.indexOf(max);

  return names[index];
}

function getPoints(obj) {
  const group = ['100m', '400m', '1500m', '110m hurdles'];
  return Object.keys(obj)
    .reduce((sum, discipline) => {
      const {A, B, C} = pTable[discipline];
      const P = obj[discipline];
      if (P === null) {
        return sum;
      }
      const num = group.includes(discipline) ? (B - P) : (P - B);
      if (num < 0) {
        return sum;
      }
      const points = Math.floor(A * Math.pow(num, C));
      return sum + points;
    }, 0);
}
