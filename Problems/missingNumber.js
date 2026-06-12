let nums = [0, 1];
function missingNumber(nums) {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    let index = nums[i];
    if (nums[i] < n && nums[i] != nums[index]) {
      let temp = nums[i];
      nums[i] = nums[index];
      nums[index] = temp;
    } else i++;
  }
  for (i = 0; i < n; i++) if (nums[i] != i) return i;
  return n;
}
console.log(missingNumber(nums));
