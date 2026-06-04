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

let minC = 0,
  minR = 0;
let maxC = cols - 1;
maxR = row - 1;
let elem = new Array();

while (minR <= maxR && minC <= maxC) {
  if (minR <= maxR) {
    for (let i = minC; i <= maxC; i++) {
      elem.push(arr[minR][i]);
    }
    minR++;
  }
  if (minC <= maxC) {
    for (let i = minR; i <= maxR; i++) {
      elem.push(arr[i][maxC]);
    }
    maxC--;
  }
  if (minR <= maxR) {
    for (let i = maxC; i >= minC; i--) {
      elem.push(arr[maxR][i]);
    }
    maxR--;
  }
  if (minC <= maxC) {
    for (let i = maxR; i >= minR; i--) {
      elem.push(arr[i][minC]);
    }
    minC++;
  }
}

console.log(elem);
