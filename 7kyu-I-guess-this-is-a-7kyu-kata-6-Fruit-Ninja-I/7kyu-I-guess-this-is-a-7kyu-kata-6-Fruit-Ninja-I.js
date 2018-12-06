const fruitsName = require('./fruitsName');

function cutFruits(fruits) {
  return fruits.map(fruit => {
    if (fruitsName.includes(fruit)) {
      const i = Math.ceil(fruit.length / 2);
      return [fruit.slice(0, i), fruit.slice(i)];
    }
    return [fruit];
  })
  .reduce((prev, curr) => prev.concat(curr));
}
