let prompt = require("prompt-sync")();
let size = Number(prompt("Enter size of array: "));
let arr = new Array(size);
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Enter element of array: "));
}
let min = Math.min(arr[0], arr[1]);
let sMin = Math.max(arr[0], arr[1]);
for (let i = 2; i < arr.length; i++) {
  if (arr[i] < min) {
    sMin = min;
    min = arr[i];
  } else if (sMin > arr[i] && arr[i] != min) {
    sMin = arr[i];
  }
}
console.log(sMin);
