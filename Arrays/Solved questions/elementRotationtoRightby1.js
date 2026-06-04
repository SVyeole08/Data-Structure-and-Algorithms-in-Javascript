let prompt = require("prompt-sync")();
let size = Number(prompt("Enter size of array: "));
let arr = new Array(size);
for (let i = 0; i < size; i++) {
  arr[i] = Number(prompt("Enter elements of array: "));
}
let temp = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = temp;
console.log(arr);
