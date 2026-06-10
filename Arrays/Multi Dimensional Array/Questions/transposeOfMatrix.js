let prompt = require("prompt-sync")();

let size = Number(prompt("Enter size of array: "));
let size_inner = Number(prompt("Enter size of inner array: "));
let arr = new Array(size);
for (let i = 0; i < size; i++) {
  arr[i] = new Array();
}
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size_inner; j++) {
    arr[i][j] = Number(prompt("Enter element of array: "));
  }
  console.log();
}
let transpose = Array.from({ length: arr[0].length }, () => Array(arr.length));
for (let i = 0; i < transpose.length; i++) {
  for (let j = 0; j < transpose[i].length; j++) {
    transpose[i][j] = arr[j][i];
  }
}

console.log(transpose);
