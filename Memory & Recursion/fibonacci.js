let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
let first = 0;
let second = 1;
function fibon(n, first, second) {
  if (n == 0) return;
  let third = first + second;
  process.stdout.write(third + " ");
  fibon(n - 1, second, third);
}
if (n <= 0) {
  console.log("Invalid input");
} else if (n == 1) {
  console.log(0);
} else {
  process.stdout.write(first + " " + second + " ");
  fibon(n - 2, first, second);
}
