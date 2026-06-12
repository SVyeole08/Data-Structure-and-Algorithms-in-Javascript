let nums = [4,3,2,7,8,2,3,1]

function findDisappeared(nums) {
  let i = 0;
  let ans = [];
  let n = nums.length;
  while (i < n) {
    let index = nums[i] - 1;
    if (nums[i] != nums[index]) {
      let temp = nums[i];
      nums[i] = nums[index];
      nums[index] = temp;
    } else i++;
  }
  for (i = 0; i < n; i++) {
    if (nums[i] != i + 1) ans.push(i + 1);
  }
  return ans;
}
console.log(findDisappeared(nums));
