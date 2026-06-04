const left0 = () => {
  let prompt = require("prompt-sync")();
  let arr = [1, 1, 0, 1, 0, 0, 1];
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (arr[i] == 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
    i++;
  }
  console.log(arr);
};

const left0right2 = () => {
  let arr = [2, 1, 0, 0, 2, 2, 1, 0, 1, 1, 2, 1, 0];
  let i = 0;
  let j = 0;

  while (i < arr.length) {
    if (arr[i] == 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
    i++;
  }
  i = 0;
  while (i < arr.length) {
    if (arr[i] == 1) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
    i++;
  }
  console.log(arr);
};
