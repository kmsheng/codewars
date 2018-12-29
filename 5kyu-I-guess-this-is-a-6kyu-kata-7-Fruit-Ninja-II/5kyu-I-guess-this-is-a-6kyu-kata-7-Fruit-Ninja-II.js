const fruitsName = require('./fruitsName');

function countFruits(halfFruits) {
  const res = {};
  const pieces = halfFruits.slice().sort((a, b) => b.length - a.length);
  for (let i = 0; i < pieces.length; i++) {
    const head = pieces[i];
    if (head === null) {
      continue;
    }
    for (let j = i + 1; j < pieces.length; j++) {
      const tail = pieces[j];
      if (tail === null) {
        continue;
      }
      if (fruitsName.includes(head + tail)) {
        const validLength = (head.length === tail.length) || ((head.length - tail.length) === 1);
        if (! validLength) {
          continue;
        }
        if (typeof res[head + tail] === 'undefined') {
          res[head + tail] = 0;
        }
        res[head + tail] += 1;
        pieces[i] = null;
        pieces[j] = null;
        break;
      }
      if (fruitsName.includes(tail + head)) {
        const validLength = (head.length === tail.length) || ((tail.length - head.length) === 1);
        if (! validLength) {
          continue;
        }
        if (typeof res[tail + head] === 'undefined') {
          res[tail + head] = 0;
        }
        res[tail + head] += 1;
        pieces[i] = null;
        pieces[j] = null;
        break;
      }
    }
  }
  return res;
}

let res = countFruits(["app","le","app","le","le","le"]);
console.log('res', res);
