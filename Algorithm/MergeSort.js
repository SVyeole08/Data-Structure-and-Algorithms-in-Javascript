let arr = [
  2131, 514, 2156916, 321564894612, 564561, 584, 56156, 415641, 615696764, 231,
  411, 41, 41, 489748978, 45, 7, 21, 975,
];

function conquer(arr, f, m, l) {
  let temp = [];
  let i = f;
  let j = m + 1;
  let k = 0;
  while (i <= m && j <= l) {
    if (arr[i] > arr[j]) {
      temp[k++] = arr[j++];
    } else {
      temp[k++] = arr[i++];
    }
  }
  while (i <= m) {
    temp[k++] = arr[i++];
  }
  while (j <= l) {
    temp[k++] = arr[j++];
  }
  i = f;
  k = 0;
  while (k < temp.length) {
    arr[i++] = temp[k++];
  }
}

function divide(arr, f, l) {
  if (f >= l) return;
  let m = Math.floor((l + f) / 2);
  divide(arr, f, m);
  divide(arr, m + 1, l);
  conquer(arr, f, m, l);
}

divide(arr, 0, arr.length - 1);
console.log(arr);
