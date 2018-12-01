function formatDuration (s) {
  if (s === 0) {
    return 'now';
  }
  const years = toInt(s / (86400 * 365));
  const days = toInt((s - (years * 86400 * 365)) / 86400);
  const hours = toInt((s - (years * 86400 * 365) - (days * 86400)) / 3600);
  const minutes = toInt((s - (years * 86400 * 365) - (days * 86400) - (hours * 3600)) / 60);
  const seconds = toInt(s - (years * 86400 * 365) - (days * 86400) - (hours * 3600) - (minutes * 60));

  return separate([
    {str: 'year', num: years},
    {str: 'day', num: days},
    {str: 'hour', num: hours},
    {str: 'minute', num: minutes},
    {str: 'second', num: seconds}
  ]);
}

function toInt(num) {
  return parseInt(noExponent(num), 10);
}

function noExponent(num) {

  const data = String(num).split(/[eE]/);

  if (data.length === 1) {
    return data[0];
  }

  const sign = num < 0 ? '-' : '';
  const str = data[0].replace('.', '');

  let z = '';
  let mag = Number(data[1]) + 1;

  if (mag < 0) {
    z = sign + '0.';
    while (mag++) {
      z += '0';
    }
    return z + str.replace(/^\-/,'');
  }
  mag -= str.length;
  while (mag--) {
    z += '0';
  }
  return str + z;
}

function plural({num, str}) {
  if (num > 1) {
    return `${num} ${str}s`;
  }
  return `${num} ${str}`;
}

function separate(a) {
  const arr = a.filter(row => row.num !== 0);
  if (arr.length === 1) {
    return plural(arr[0]);
  }
  return arr.map((row, index) => {
    const isLast = index === (arr.length - 1);
    const isBeforeLast = index === (arr.length - 2);
    if (isLast) {
      return `and ${plural(row)}`;
    }
    if (isBeforeLast) {
      return plural(row);
    }
    return `${plural(row)},`;
  })
  .join(' ');
}
