let prompt = require("prompt-sync")();

let size = Number(prompt("Enter size of array: "));
let arr = new Array(size);
for (let i = 0; i < size; i++) {
  arr[i] = Number(prompt("Enter element  of array: "));
}
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);
for (let i = 2; i < size; i++) {
  if (arr[i] > max) {
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax && arr[i]!=max) {
    sMax = arr[i];
  }
}
console.log("Second max element of array is " + sMax);
