let nums = [1, 2, 3, 4, 5],
  k = 2;

function search(nums, k) {
  let f = Math.max(...nums);
  let l = 0;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) l += nums[i];
  while (f <= l) {
    let mid = Math.floor((l + f) / 2);
    if (isValid(nums, mid, k)) {
      ans = mid;
      l = mid - 1;
    } else f = mid + 1;
  }
  return ans;
}
function isValid(nums, upperLimit, k) {
  let sum = 0,
    count = 1;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > upperLimit) {
      count++;
      sum = nums[i];
      if (count > k) return false;
    }
  }
  return sum <= upperLimit;
}
console.log(search(nums, k));
