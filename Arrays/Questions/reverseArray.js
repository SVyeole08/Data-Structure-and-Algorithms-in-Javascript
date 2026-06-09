let prompt = require("prompt-sync")();
const m1 = () => {
  let size = Number(prompt("Enter size of array: "));
  let arr = new Array(size);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt("Enter element  of array: "));
  }
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  console.log(rev);
};

// m1();

//Two pointer algorithm

const m2 = () => {
  let size = Number(prompt("Enter size of array: "));
  let arr = new Array(size);
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt("Enter element  of array: "));
  }
  let j = size - 1;
  while (k < j) {
    let temp = arr[k];
    arr[k] = arr[j];
    arr[j] = temp;
    k++;
    j--;
  }
  console.log(arr);
};
