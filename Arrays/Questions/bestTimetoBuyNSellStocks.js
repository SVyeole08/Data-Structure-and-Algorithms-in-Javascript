let prices = [7, 6, 4, 3, 1];
let min = prices[0];
let maxprices = 0;
for (let i = 1; i < prices.length; i++) {
  if (prices[i] < min) {
    min = prices[i];
  }
  let currprices = prices[i] - min;
  maxprices = Math.max(currprices, maxprices);
}
console.log(maxprices);
