function removeSmallest(nums) {
  const min = Math.min(...nums);
  const index = nums.findIndex(num => num === min);
  return nums.slice().filter((_, i) => i !== index);
}
