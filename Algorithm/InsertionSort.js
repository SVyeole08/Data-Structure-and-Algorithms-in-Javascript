let prompt = require("prompt-sync")();
let size = Number(prompt("Enter size of array: "));
let arr = new Array(size);
for (let i = 0; i < size; i++) {
  arr[i] = Number(prompt("Enter element of array: "));
}
for (let i = 1; i < size; i++) {
  let key = arr[i];
  let j = i - 1;
  while (arr[j] > key && j >= 0) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}
console.log(arr)