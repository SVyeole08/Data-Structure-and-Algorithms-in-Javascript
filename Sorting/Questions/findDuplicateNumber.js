let nums = [3,1,3,4,2]
let dup = nums[0];

function findDuplicate(nums, dup) {
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
    if (nums[j] != j + 1) dup =nums[j]
  }
  return dup
}
console.log(findDuplicate(nums, dup));
