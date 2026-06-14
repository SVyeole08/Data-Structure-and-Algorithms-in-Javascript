let weights = [1,2,3,1,1]
let days = 4;

function shipWithinDays(weights, days) {
  let first = 0,
    last = 0,
    ans = -1;
  for (let i = 0; i < weights.length; i++) {
    first = Math.max(first, weights[i]);
    last += weights[i];
  }
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (isValid(weights, mid, days)) {
      ans = mid;
      last = mid - 1;
    } else first = mid + 1;
  }
  return ans;
}

function isValid(weights, upperLimit, days) {
  let count = 1,
    sum = 0;
  for (let i = 0; i < weights.length; i++) {
    if (weights[i] + sum > upperLimit) {
      count++;
      sum = weights[i];
      if (count > days) return false;
    } else sum += weights[i];
  }
  return true;
}
console.log(shipWithinDays(weights, days));
