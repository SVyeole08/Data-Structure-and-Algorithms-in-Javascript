let prompt = require("prompt-sync")();
let size = Number(prompt("Enter size of array: "));
let arr = new Array(size);
let k = Number(
  prompt(
    "Enter a number of times you want to rotate elements of array to left: ",
  ),
);
for (let j = 0; j < size; j++) {
  arr[j] = Number(prompt("Enter element of array: "));
}
for (let j = 1; j <= k; j++) {
  let temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
    if (i == arr.length - 1) {
      arr[i] = temp;
      break;
    }
  }
}
console.log(arr);
