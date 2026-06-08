let prompt = require("prompt-sync")();
let x = Number(prompt("Enter a number: "));
let n = Number(prompt("Enter power of a number: "));

console.log(power(x, n));
function power(x, n) {
  return n < 0 ? 1 / temp(x, n) : temp(x, n);
}
function temp(x, n) {
  if (n == 0) return 1;
  let ans = temp(x, parseInt(n / 2));
  if (n % 2 == 0) return ans * ans;
  return ans * ans * x;
}
//parsetInt converts value to integer
