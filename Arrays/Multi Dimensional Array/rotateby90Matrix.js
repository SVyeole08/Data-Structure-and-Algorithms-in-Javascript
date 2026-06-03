//Logic to rotate matrix by 90 is to take transpose first and reverse the row one by one.

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

//Transpose
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr[i].length; j++) {
    let temp = arr[i][j];
    arr[i][j] = arr[j][i];
    arr[j][i] = temp;
  }
}

//Reverse the row
for (let i = 0; i < arr.length; i++) {
  let k = 0;
  let j = arr.length - 1;
  while (k < j) {
    let temp = arr[i][j];
    arr[i][j] = arr[i][k];
    arr[i][k] = temp;
    k++;
    j--;
  }
}
console.log(arr);
