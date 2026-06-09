let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
function rev(n, r) {
  if (n == 0) return r;
  return rev(Math.floor(n / 10), r * 10 + (n % 10));
}
console.log(rev(n, 0));
