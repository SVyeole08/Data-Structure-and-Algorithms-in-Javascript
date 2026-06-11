let arr = [12, 4, 22, 90, 2, 0, 23, 89];
quickSort(arr, 0, arr.length - 1);
console.log(arr)

function findPivotIdx(arr, first, last) {
  let pivot = arr[last];
  let i = first - 1;
  for (let j = first; j < last; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  i++;
  swap(arr, i, last);
  return i;
}

function quickSort(arr, first, last) {
  if (first >= last) return;
  let pIdx = findPivotIdx(arr, first, last);
  quickSort(arr, first, pIdx - 1);
  quickSort(arr, pIdx + 1, last);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
