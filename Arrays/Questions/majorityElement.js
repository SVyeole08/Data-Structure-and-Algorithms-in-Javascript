let nums = [1,3,3,3,4,9];
const majo = (nums) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
    else map.set(nums[i], 1);
    if (map.get(nums[i]) > nums.length / 2) {
      return nums[i];
    }
  }
};
// console.log(majo(nums));

//Boyer-Moore Voting Algorithm
const opmt = (nums) => {
  let maj = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      maj = nums[i];
      count = 1;
    }
    else if (maj != nums[i]) count--;
    else {
      count++;
    }
  }
  return maj;
};
console.log(opmt(nums));
