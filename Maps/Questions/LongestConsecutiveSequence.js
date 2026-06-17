let nums = [0];
let longest = 0;
const raw = (nums, longest) => {
  nums.sort((a, b) => a - b);
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] == nums[i]) continue;
    if (nums[i + 1] == nums[i] + 1) count++;
    else {
      longest = Math.max(longest, count);
    }
  }
  return longest;
};
// console.log(raw(nums,longest));

const ompt = (nums, longest) => {
  let set = new Set(nums);
  let count = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      count = 1;
      while (set.has(num + count)) {
        count++;
      }
      longest = Math.max(count, longest);
    }
  }
  return longest;
};
console.log(ompt(nums, longest));
