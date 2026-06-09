let prompt = require("prompt-sync")();
let size = Number(prompt("Enter how many words you want to enter: "));
let arr = new Array(size);

for (let i = 0; i < size; i++) {
  arr[i] = prompt("Enter your character: ");
}
let pref = prompt("Enter your prefix: ");
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith(pref)) count++;
}
console.log("Prefix " + pref + " came " + count + " times.");
