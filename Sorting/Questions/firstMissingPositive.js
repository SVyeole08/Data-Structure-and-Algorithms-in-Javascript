let arr = [1];

function missPositive(arr) {
  let n = arr.length;
  let i = 0;
  while (i < n) {
    let index = arr[i] - 1;
    if (arr[i] != arr[index] && arr[i] > 0 && arr[i] < n) {
      let tp = arr[i];
      arr[i] = arr[index];
      arr[index] = tp;
    } else i++;
  }
  for (let j = 0; j < n; j++) {
    if (arr[j] != j + 1) return j + 1;
  }
  return n + 1;
}

console.log(missPositive(arr));
