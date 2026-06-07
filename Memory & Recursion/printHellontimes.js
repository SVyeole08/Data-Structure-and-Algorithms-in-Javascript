let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
temp(n);
function temp(a) {
  if (a == 0) return;
  console.log("hello weorld");
  temp(--a);
}
