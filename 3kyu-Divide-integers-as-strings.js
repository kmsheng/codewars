function lt(str1, str2) {
  if (str1 === str2) {
    return false;
  }
  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      const num1 = parseInt(str1[i], 10);
      const num2 = parseInt(str2[i], 10);
      if (num1 > num2) {
        return false;
      }
      if (num1 < num2) {
        return true;
      }
    }
    return true;
  }
  return str1.length < str2.length;
}

function gte(str1, str2) {
  if (str1 === str2) {
    return true;
  }
  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      const num1 = parseInt(str1[i], 10);
      const num2 = parseInt(str2[i], 10);
      if (num1 > num2) {
        return true;
      }
      if (num1 < num2) {
        return false;
      }
    }
    return true;
  }
  return str1.length > str2.length;
}

function replaceStr(str, i, char) {
  return str.substring(0, i) + char + str.substring(i + 1);
}

function subtract(minuend, subtrahend) {

  if (minuend === subtrahend) {
    return '0';
  }

  let line1 = minuend;
  let line2 = subtrahend;

  if (lt(line1, line2)) {
    [line1, line2] = [line2, line1];
  }
  const length1 = line1.length;
  const length2 = line2.length;
  line2 = '0'.repeat(length1 - length2) + line2;

  let res = '';

  for (let i = length1 - 1; i >= 0; i--) {
    const num1 = parseInt(line1[i], 10);
    const num2 = parseInt(line2[i], 10);

    let difference = 0;

    if (num1 < num2) {

      let leftNum;
      let shiftedTimes = 0;

      while (true) {
        ++shiftedTimes;
        leftNum = parseInt(line1[i - shiftedTimes], 10);

        let pos = i - shiftedTimes;

        if (leftNum === 0) {
          line1 = replaceStr(line1, pos, '9');
        }
        else {
          difference = 10 - num2 + num1;
          line1 = replaceStr(line1, pos, String(leftNum - 1));
          break;
        }
      }
    }
    else {
      difference = num1 - num2;
    }
    res = String(difference) + res;
  }
  res = res.replace(/^0*/, '');
  return res;
}

function divideStrings(dividend, divisor) {
  if (lt(dividend, divisor)) {
    return ['0', dividend];
  }
  if (divisor === '1') {
    return [dividend, 0];
  }
  let res = '';
  let d = '';
  for (let i = 0; i < dividend.length - divisor.length + 1; i++) {

    if (i === 0) {
      d = dividend.substring(0, divisor.length);
    }
    else {
      d += dividend[i + divisor.length - 1];
      d = d.replace(/^0+$/, '0');
    }

    if (d === divisor) {
      res += '1';
      d = '';
      continue;
    }
    let count = 0;

    while (gte(d, divisor)) {
      d = subtract(d, divisor);
      count++;
    }
    d = d.replace(/^0+/, '');

    if (d === '') {
      d = '0';
    }
    res = res + String(count);
    res = res.replace(/^0+/, '');
  }
  return [res, d];
}
