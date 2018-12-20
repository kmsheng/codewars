function tidyNumber(n) {
  const nums = String(n).split("")
    .map(n => parseInt(n, 10));
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      return false;
    }
  }
  return true;
}
