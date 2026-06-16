let piles = [3, 6, 7, 11],
  h = 8;
function speedOfEat(piles, h) {
  let f = 1,
    l = Math.max(...piles),
    speed = 0;
  while (f <= l) {
    let mid = Math.floor((f + l) / 2);
    if (isValid(piles, mid, h)) {
      speed = mid;
      l = mid - 1;
    } else f = mid + 1;
  }
  return speed;
}

function isValid(piles, upperLimit, h) {
  let hours = 0;
  for (let i = 0; i < piles.length; i++) {
    hours += Math.ceil(piles[i] / upperLimit);
  }
  return hours <= h;
}
console.log(speedOfEat(piles, h));
