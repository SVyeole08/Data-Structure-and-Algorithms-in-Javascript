let arr = [3, 5, 2, 6, 9, 8, 7, 4, 10, 1];
let i = 0;
while (i < arr.length) {
  let correctIdx = arr[i] - 1;
  if (arr[i] != arr[correctIdx]) {
    let temp = arr[i];
    arr[i] = arr[correctIdx];
    arr[correctIdx] = temp;
  } else i++;
}
console.log(arr);
