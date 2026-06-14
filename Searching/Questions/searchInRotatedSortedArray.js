let nums = [4, 5, 6, 7, 0, 1, 2, 3];
let target = 2;
function search(nums, target) {
  let f = 0;
  let l = nums.length - 1;
  while (f <= l) {
    let m = Math.floor((f + l) / 2);
    if (nums[m] == target) return m;
    if (nums[f] <= nums[m]) {
      if (nums[f] <= target && target <= nums[m]) {
        l = m;
      } else f = m + 1;
    } else {
      if (nums[m + 1] <= target && target <= nums[l]) {
        f = m + 1;
      } else l = m;
    }
  }
  return -1;
}
console.log(search(nums, target));
