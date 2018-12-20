function solve(s) {
  const charMap = s.split('')
    .reduce((map, char) => {
      if (typeof map[char] === 'undefined') {
        map[char] = 0;
      }
      map[char] += 1;
      return map;
    }, {});
  const nums = Object.values(charMap);
  const lengthCount = Object.keys(nums.reduce((obj, num) => {
    obj[num] = true;
    return obj;
  }, {})).length;
  if (lengthCount > 2) {
    return false;
  }
  nums.sort((a, b) => a - b);
  if (nums.length === 1) {
    return true;
  }
  if (nums.every(num => num === 1)) {
    return true;
  }
  const restTheSame = nums.slice(1).every(num => num === nums[1]);
  if (nums[0] === 1 && restTheSame) {
    return true;
  }
  if ((nums[nums.length - 1] - nums[nums.length - 2]) === 1) {
    return true;
  }
  return false;
}
