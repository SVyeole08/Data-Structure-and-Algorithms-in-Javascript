let arr = [12, 34, 67, 90];
let k = 2;

function isValid(arr, upperLimit, k) {
  let count = 1,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + sum > upperLimit) {
      count++;
      sum = arr[i];
      if (count > k) return false;
    } else sum += arr[i];
  }
  return true;
}
function allocateMin(arr, k) {
  if (k > arr.length) return -1;
  let f = 0,
    l = 0,
    ans = -1;
  for (let i = 0; i < arr.length; i++) {
    f = Math.max(f, arr[i]);
    l += arr[i];
  }
  while (f <= l) {
    let mid = Math.floor((f + l) / 2);
    if (isValid(arr, mid, k)) {
      ans = mid;
      l = mid - 1;
    } else f = mid + 1;
  }
  return ans;
}
console.log(allocateMin(arr, k));
