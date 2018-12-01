function add(augend, addend) {

  let line1 = augend;
  let line2 = addend;

  if (line1.length < line2.length) {
    [line1, line2] = [line2, line1];
  }

  const length1 = line1.length;
  const length2 = line2.length;
  line2 = '0'.repeat(length1 - length2) + line2;

  let res = '';
  let carry = 0;

  for (let i = length1 - 1; i >= 0; i--) {
    const num1 = parseInt(line1[i], 10);
    const num2 = parseInt(line2[i], 10);
    const sum = num1 + num2 + carry;
    carry = 0;

    if (sum >= 10) {
      res = String(sum - 10) + res;
      carry += 1;
    }
    else {
      res = String(sum) + res;
    }
  }

  if (carry > 0) {
    res = String(carry) + res;
  }
  return res;
}

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

function multiply(multiplicand, multiplier) {

  let line1 = multiplicand;
  let line2 = multiplier;

  if (line1.length < line2.length) {
    [line1, line2] = [line2, line1];
  }

  const length2 = line2.length;

  let res = '0';
  let carry = 0;

  for (let i = length2 - 1; i >= 0; i--) {
    let num2 = parseInt(line2[i], 10);
    let tmpStr = '';
    for (let j = line1.length - 1; j >= 0; j--) {
      let num1 = parseInt(line1[j], 10);
      let product = (num2 * num1) + carry;

      carry = 0;
      if (product >= 10) {
        carry += parseInt(product / 10, 10);
        product %= 10;
      }
      tmpStr = String(product) + tmpStr;

      if (j === 0) {
        if (carry > 0) {
          tmpStr = carry + tmpStr;
          carry = 0;
        }
        res = add(res, tmpStr + '0'.repeat(length2 - i - 1));
      }
    }
  }
  if (carry) {
    res = String(carry) + res;
  }
  res = res.replace(/^0+/, '0');
  return res;
}

function divide(dividend, divisor) {
  if (lt(dividend, divisor)) {
    return '0';
  }
  if (divisor === '1') {
    return dividend;
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
    res = res + String(count);
    res = res.replace(/^0+/, '');
  }
  return res;
}
