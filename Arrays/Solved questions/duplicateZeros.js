let arr = [1, 2, 3];
let ans = [];

//Brute-force
let j = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    ans[j] = arr[i];
    j++;
  } else {
    ans[j] = 0;
    ans[j + 1] = 0;
    j += 2;
  }
}
for (let i = 0; i < arr.length; i++) {
  arr[i] = ans[i];
}
console.log(arr);

//Efficient approach
const omt = () => {
  let count_zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) count_zero++;
  }
  let i = arr.length - 1;
  let j = arr.length - 1 + count_zero;
  while (i != j) {
    if (j < arr.length) {
      arr[j] = arr[i];
    }
    j--;
    if (arr[i] == 0) {
      if (j < arr.length) {
        arr[j] = arr[i];
      }
      j--;
    }
    i--;
  }
  return arr;
};
console.log(omt());
