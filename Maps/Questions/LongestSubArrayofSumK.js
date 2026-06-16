let arr = [10, 5, 2, 7, 1, -10],
  k = 15;

let map = new Map();
let sum = 0;
let maxLength = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (sum === k) {
    maxLength = i + 1;
  }
  if (!map.has(sum)) {
    map.set(sum, i);
  }
  if (map.has(sum - k)) {
    maxLength = Math.max(maxLength, i - map.get(sum - k) + 1);
  }
}
console.log(maxLength);
