let nums = [4, 3, 2, 7, 8, 2, 3, 1];
let ans = [];
function findDuplicates(nums) {
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
    if (nums[j] != j + 1) ans.push(nums[j]);
  }
  return ans;
}
console.log(findDuplicates(nums))