let prompt = require("prompt-sync")();
let row = Number(prompt("Enter size of outer array: "));
let cols = Number(prompt("Enter size of inner array: "));
let arr = new Array();
for (let i = 0; i < row; i++) {
  arr[i] = new Array(cols);
}
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = Number(prompt("Enter element of array: "));
  }
  console.log();
}

for (let i = 0; i < arr.length; i++) {
  let k = 0;
  let j = arr.length - 1;
  while (k < j) {
    let temp = arr[i][k];
    arr[i][k] = arr[i][j];
    arr[i][j] = temp;
    k++;
    j--;
  }
}
console.log(arr)