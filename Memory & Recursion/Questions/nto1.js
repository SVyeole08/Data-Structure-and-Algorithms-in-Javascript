let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number:"));

temp(n);
function temp(a) {
  if (a == 0) return;
  process.stdout.write(a + " ");
  temp(a - 1);
}
