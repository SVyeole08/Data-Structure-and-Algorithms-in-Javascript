let prompt = require("prompt-sync")();
let size = Number(prompt("Enter size of array: "));
let arr = new Array(size);
for (let i = 0; i < size; i++) {
  arr[i] = Number(prompt("Enter element of array: "));
}
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
