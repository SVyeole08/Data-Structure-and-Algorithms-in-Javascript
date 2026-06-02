let prompt = require("prompt-sync")();

const raw = () => {
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
};
// raw();

const opt1 = () => {
  let size = Number(prompt("Enter size of array: "));
  let arr = new Array(size);
  let k = Number(
    prompt(
      "Enter a number of times you want to rotate elements of array to left: ",
    ),
  );
  k = k % arr.length; //It just reduces the repetitive mechanism
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
};
// opt1();

const opt2 = () => {
  let size = Number(prompt("Enter size of array: "));
  let k = Number(
    prompt(
      "Enter a number of times you want to rotate elements of array to left: ",
    ),
  );
  let arr = new Array(size);
  for (let j = 0; j < size; j++) {
    arr[j] = Number(prompt("Enter element of array: "));
  }
  let temp = new Array(size);
  for (let i = 0; i < size; i++) {
    temp[i] = arr[(i + k) % size]; //It just reduces the repetitive mechanism
  }
  console.log(temp);
};
// opt2();

const opt3 = () => {
  let size = Number(prompt("Enter size of array: "));
  let k = Number(
    prompt(
      "Enter a number of times you want to rotate elements of array to left: ",
    ),
  );
  k = k % size;
  let arr = new Array(size);
  for (let x = 0; x < size; x++) {
    arr[x] = Number(prompt("Enter element of array: "));
  }
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
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
