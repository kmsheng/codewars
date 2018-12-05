function popShift(s) {
  const arr = s.split('');
  let str1 = ''
  let str2 = '';
  let str3 = '';
  while (arr.length > 0) {
    if (arr.length === 1) {
      str3 = arr.pop();
    }
    else {
      str1 += arr.pop();
      str2 += arr.shift();
    }
  }
  return [str1, str2, str3];
}
