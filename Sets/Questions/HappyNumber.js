let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));
let copy = n;

if (happy(n)) console.log(copy + " is a happy number.");
else console.log(copy + " is not a happy number.");

function happy(n) {
  let set = new Set();
  while (true) {
    let sum = 0;
    while (n > 0) {
      let digit = n % 10;
      sum += Math.pow(digit, 2);
      n = Math.floor(n / 10);
    }
    if (sum == 1) return true;
    if (set.has(sum)) return false;
    else set.add(sum);
    n = sum;
  }
  return false;
}
