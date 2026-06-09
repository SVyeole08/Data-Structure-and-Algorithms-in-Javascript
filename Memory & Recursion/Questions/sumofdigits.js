let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
function sum(n) {
  if (n < 10) return n;
  return (n % 10) + sum(Math.floor(n / 10));
}
console.log(sum(n));
