let nums = [1, 2, 2, 4];
let ans = [];
function setMismatch(nums) {
  let i = 0;
  while (i < nums.length) {
    let index = nums[i] - 1;
    if (nums[i] != nums[index]) {
      let tp = nums[i];
      nums[i] = nums[index];
      nums[index] = tp;
    } else i++;
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != j + 1) ans = [nums[j], j + 1];
  }
  return ans;
}
console.log(setMismatch(nums));
