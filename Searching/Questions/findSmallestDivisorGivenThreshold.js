let nums = [1, 2, 5, 9],
  threshold = 6;

function findSmallestDiv(nums, threshold) {
  let f = 1;
  let l = Math.max(...nums);
  let ans = -1;
  while (f <= l) {
    let mid = Math.floor((f + l) / 2);
    if (isValid(nums, mid, threshold)) {
      ans = mid;
      l = mid - 1;
    } else f = mid + 1;
  }
  return ans;
}
console.log(findSmallestDiv(nums, threshold));
function isValid(nums, mid, threshold) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += Math.ceil(nums[i] / mid);
  }
  return sum <= threshold;
}
