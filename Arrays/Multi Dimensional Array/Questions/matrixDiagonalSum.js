let prompt = require("prompt-sync")();

let size = Number(prompt("Enter size of array: "));
let size_inner = Number(prompt("Enter size of inner array: "));
let arr = new Array(size);
let leftSum = 0;
let rightSum = 0;
for (let i = 0; i < size; i++) {
  arr[i] = new Array();
}
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size_inner; j++) {
    arr[i][j] = Number(prompt("Enter element of array: "));
    if (i == j) leftSum += arr[i][j];
    if (i + j == arr.length - 1) rightSum += arr[i][j];
  }
  console.log();
}
console.log("Sum of elements of left diagonal = " + leftSum);
console.log("Sum of elements of right diagonal = " + rightSum);
