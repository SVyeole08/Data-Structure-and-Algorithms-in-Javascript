let prompt = require("prompt-sync")();
let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    process.stdout.write(`${arr[i][j]} `);
  }
  console.log();
}

const Two_D = () => {
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
  console.log(arr);
};
// Two_D();

const Three_D = () => {
  let size = Number(prompt("Enter size of array: "));
  let size_2d = Number(prompt("Enter size of 2d array: "));
  let size_3d = Number(prompt("Enter size of 3d array: "));
  let arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = new Array();
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size_2d; j++) {
      arr[i][j] = new Array();
      for (let k = 0; k < size_3d; k++) {
        arr[i][j][k] = Number(prompt("Enter element of array: "));
      }
      console.log();
    }
  }
  console.log(arr);
};
// Three_D();

//Shortcut to return 2d array
let arr_2d = Array.from({ length: 3 }, () => Array(4).fill(2));
console.log(arr_2d); //[ [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ] ]
