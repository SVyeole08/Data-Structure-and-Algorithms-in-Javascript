let prompt = require("prompt-sync")();
let size = Number(prompt("Enter size of array: "));
let arr = new Array(size);
let k = Number(
  prompt(
    "Enter a number of times you want to rotate elements of array to right: ",
  ),
);
for (let j = 0; j < size; j++) {
  arr[j] = Number(prompt("Enter element of array: "));
}
const raw = () => {
  for (let i = 1; i <= k; i++) {
    let temp = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
  }
  console.log(arr);
};
// raw();

const opt1 = () => {
  k = k % arr.length; //It just reduces the repetitive mechanism
  for (let i = 1; i <= k; i++) {
    let temp = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
  }
  console.log(arr);
};
// opt1();

const opt2 = () => {
  k = k % size;
  let temp = new Array(size);
  for (let i = 0; i < size; i++) {
    temp[(i + k) % size] = arr[i];
  }
  console.log(temp);
};
// opt2();
const opt3 = () => {
  reverse(arr, 0, arr.length - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, k - 1);
  function reverse(arr, i, j) {
    while (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  console.log(arr);
};
opt3();
