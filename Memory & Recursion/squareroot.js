let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

function sqrt(n) {
  let i = 1;
  for (i = 1; i * i <= n; i++) {
    if (i * i == n) return i;
  }
  return i - 1;
}
console.log(sqrt(n));
