const WORDS = require('./words');
const Preloaded = {WORDS};

const phoneWords = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];

function indexToNumStr(index, selectedWords) {

  const arr = selectedWords.slice();
  let str = '';
  let carry = index;

  while (arr.length > 0) {
    const length = arr.pop().length;
    const remainder = carry % length;
    str = remainder + str;
    carry = parseInt(carry / length, 10);
  }
  return str;
}

function isWord(word) {
  return Preloaded.WORDS.includes(word);
}

function check1800(str) {

  const arr = [];
  const [, firstWord, secondWord] = str.match(/^1\-800\-([A-Z]+)\-([A-Z]+)$/);
  const selectedWords = (firstWord + secondWord).split('')
    .map(char => phoneWords.find(word => word.includes(char)));

  const length = selectedWords.map(s => s.length)
    .reduce((prev, curr) => prev * curr);

  for (let i = 0; i < length; i++) {
    const numStr = indexToNumStr(i, selectedWords);
    const chars = numStr.split('')
      .map((num, index) => selectedWords[index][num])
      .join('');

    const first = chars.substring(0, 3);
    const second = chars.substring(3);

    if (isWord(first) && isWord(second)) {
      arr.push(`1-800-${first}-${second}`);
    }

    const third = chars.substring(0, 4);
    const fourth = chars.substring(4);

    if (isWord(third) && isWord(fourth)) {
      arr.push(`1-800-${third}-${fourth}`);
    }
  }
  return arr;
}
