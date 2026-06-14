let bloomDay = [7, 7, 7, 7, 12, 7, 7],
  m = 2,
  k = 3;
function minDays(bloomDay, m, k) {
  let days = -1;
  if (m * k > bloomDay.length) return -1;
  let f = bloomDay[0];
  let l = bloomDay[0];
  for (let i = 0; i < bloomDay.length; i++) {
    f = Math.min(f, bloomDay[i]);
    l = Math.max(l, bloomDay[i]);
  }
  while (f <= l) {
    let mid = Math.floor((f + l) / 2);
    if (isValid(bloomDay, mid, m, k)) {
      days = mid;
      l = mid - 1;
    } else f = mid + 1;
  }
  return days;
}
function isValid(bloomDay, upperLimit, m, k) {
  let bouque = 0,
    consecutive = 0;
  for (let i = 0; i < bloomDay.length; i++) {
    if (bloomDay[i] <= upperLimit) {
      consecutive++;
      if (consecutive == k) {
        bouque++;
        consecutive = 0;
      }
    } else consecutive = 0;
  }
  return bouque >= m;
}
console.log(minDays(bloomDay, m, k));
