let prompt = require("prompt-sync")();
let div = Number(prompt("Enter a number: "));
let count = 0;
for (let num = 1; num <= 50; num++) {
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == div) {
    process.stdout.write(num+", ");
  }
  count = 0;
}
