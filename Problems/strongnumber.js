let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
let copy = n;
let sum = 0;
while (copy > 0) {
  let digit = copy % 10;
  let fact = 1;
  for (let j = 1; j <= digit; j++) {
    fact = fact * j;
  }
  sum += fact;
  copy = Math.floor(copy / 10);
}
if (n == sum) {
  console.log(n + " is a strong number.");
} else console.log(n + " is not a strong number.");
