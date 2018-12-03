function mysteriousPattern(m, n) {
  const arr = [];
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i < m; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  arr.length = m;
  const nums = arr.map(num => num % n);
  const max = Math.max.apply(null, nums);

  let str = '';
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j < nums.length; j++) {
      str += (i === nums[j]) ? 'o' : ' ';
    }
    str += '\n';
  }

  const rows = str.split('\n');
  let newStr = '';
  let canTrimTop = true;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    if (! (/^\s+$/.test(row))) {
      canTrimTop = false;
    }
    if (! canTrimTop) {
      newStr += row.replace(/\s+$/, '') + '\n';
    }
    if (canTrimTop && /^\s+$/.test(row)) {
      continue;
    }
  }
  return newStr.replace(/\n+$/, '');
}
