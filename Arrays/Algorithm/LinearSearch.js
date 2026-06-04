let prompt = require("prompt-sync")();
let arr = [12, 3, 56, 2, 23, 52, 767, 1, 345];
let target = Number(prompt("Enter your target: "));
let index = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == target) {
    index = i;
    break;
  }
}
if (index == -1) {
  console.log("Element not found.");
} else {
  console.log("Target found at " + index + " index");
}
