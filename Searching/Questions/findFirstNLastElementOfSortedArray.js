let nums = [5, 7, 7, 8, 8, 10];
let target = 8;

function BinarySearch(nums, target, isStart) {
  let first = 0,
    last = nums.length - 1,
    ans = -1;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (nums[mid] == target) {
      ans = mid;
      if (isStart) last = mid - 1;
      else first = mid + 1;
    } else if (target > nums[mid]) {
      first = mid + 1;
    } else last = mid - 1;
  }
  return ans;
}

let searchRange = function (nums, target) {
  let start = BinarySearch(nums, target, true);
  let end = BinarySearch(nums, target, false);
  return [start,end]
};
console.log(searchRange(nums, target));
