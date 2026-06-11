let prompt = require("prompt-sync")();
let size = Number(prompt("Enter size of array: "));
let arr = new Array(size);
for (let i = 0; i < size; i++) {
  arr[i] = Number(prompt("Enter element of array: "));
}
for (let i = 0; i < size - 1; i++) {
  let small = i;
  for (let j = i + 1; j < size; j++) {
    if (arr[small] > arr[j]) {
      small = j;
    }
  }
  if (small != i) {
    let temp = arr[i];
    arr[i] = arr[small];
    arr[small] = temp;
  }
}
console.log(arr);
