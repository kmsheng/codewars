let usedData = {};

function add(str) {
  if (typeof usedData[str] === 'undefined') {
    usedData[str] = 0;
  }
  usedData[str] += 1;
}

function simunq(original) {
  const replacedStr = original.replace(/[^a-zA-Z\s\-\d]/g, '-');
  const used = typeof usedData[replacedStr] !== 'undefined';
  if (used) {
    add(replacedStr);
    const newStr = replacedStr + '-' + usedData[replacedStr];
    add(newStr);
    return newStr;
  }
  add(replacedStr);
  return replacedStr;
}

simunq.reset = function() {
  usedData = {};
};
