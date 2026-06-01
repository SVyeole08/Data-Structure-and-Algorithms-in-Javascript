let prompt = require("prompt-sync")();
let arr = [3, 6, 7, 8, 9];
let index = 0;
let target = Number(prompt("Enter target element from " + arr + " : "));
for (let i = 0; i < arr.length; i++) {
  if (target > arr[arr.length - 1]) {
    index = arr.length;
    console.log(index);
    break;
  }
  if (arr[i] == target) {
    index = i;
    console.log(index);
    break;
  } else if (target < arr[i]) {
    index = i;
    console.log(index);
    break;
  }
}
