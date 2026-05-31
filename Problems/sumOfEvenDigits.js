let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));
let copy = n;
let digit = 0,
  digit_even = 0,
  sum = 0;
for (let i = 1; i <= n; i++) {
  digit = copy % 10;
  if (digit % 2 == 0) {
    digit_even = digit;
    sum += digit_even;
  }
  copy = Math.floor(copy / 10);
}
console.log(sum);
