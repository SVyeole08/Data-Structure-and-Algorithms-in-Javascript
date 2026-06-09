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
let trans = Array.from({ length: arr[0].length }, () => Array(arr.length));
for (let i = 0; i < trans.length; i++) {
  for (let j = 0; j < trans[i].length; j++) {
    trans[i][j] = arr[j][i];
  }
}

console.log(trans);
