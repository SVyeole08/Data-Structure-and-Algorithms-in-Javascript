let prompt = require("prompt-sync")();
let size = Number(prompt("Enter size of array: "));
let arr = new Array(size);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Enter element in array: "));
  sum += arr[i];
}
console.log("Sum of elements of array is " + sum);
