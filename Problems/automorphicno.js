let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));
let copy = n;
let sq = n * n;
let count = 0;
while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
}
if (sq % Math.pow(10, count) == n) console.log(n + " is an Automorphic number");
else console.log(n + " is not an Automorphic number");
