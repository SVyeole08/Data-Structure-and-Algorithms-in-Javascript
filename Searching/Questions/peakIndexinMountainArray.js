let nums = [0,1,0]
function peakIndex(nums) {
  let f = 0;
  let l = nums.length - 1;
  while (f < l) {
    let m = Math.floor(f + (l - f) / 2);
    if (nums[m] <= nums[m + 1]) {
      f = m + 1;
    }else l = m
  }
  return f;
}

console.log(peakIndex(nums));
