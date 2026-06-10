let nums = [0, 1, 0, 3, 12]; //[0] -> [0]
// [1] -> [1]
// [ 4, 2, 4, 0, 0, 3, 0, 5, 1, 0] -> [4, 2, 4, 3, 5, 1, 0, 0, 0, 0]
let i = nums.length - 1;
let j = nums.length - 1;
let ans = [];
let count_zero = 0;
let write = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] == 0) count_zero++;
}
if (count_zero != 0) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      write = nums[i];
      ans.push(write);
    }
  }
  for (let i = 1; i <= count_zero; i++) {
    ans.push(0);
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = ans[i];
  }
}

console.log(nums);
