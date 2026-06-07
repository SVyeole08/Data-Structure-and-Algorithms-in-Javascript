let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
function temp(a) {
  if (a == 0) return;
  temp(a - 1);
  process.stdout.write(a + " ");
}
temp(n);
