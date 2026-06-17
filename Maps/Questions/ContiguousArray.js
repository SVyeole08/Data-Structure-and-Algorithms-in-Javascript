let nums = [0, 1, 0, 1, 1, 0, 0];
let map = new Map();
let maxLength = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] == 0) nums[i] = -1;
}
let sum = 0;
map.set(sum, -1);
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  if (sum == 0) {
    maxLength = i + 1;
  }
  if (!map.has(sum)) {
    map.set(sum, i);
  }
  if (map.has(sum)) {
    maxLength = Math.max(maxLength, i - map.get(sum));
  }
}

console.log(maxLength);
