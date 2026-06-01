let prompt = require("prompt-sync")();
let size = Number(prompt("Enter size of array: "));
let arr = new Array(size);
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Enter element of array: "));
}
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(arr);
console.log("Max element from array is " + max);
