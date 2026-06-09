let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
function temp(n) {
  if (n == 1) return 1;
  return n + temp(n - 1);
}
console.log(temp(n));
