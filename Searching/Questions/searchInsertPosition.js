let arr = [1, 2, 3, 5, 8];
let target = 4;
let start = 0;
let end = arr.length - 1;
function BinarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target == arr[mid]) return mid;
    else if (target > arr[mid]) start = mid + 1;
    else end = mid - 1;
  }
  return start;
}
console.log(BinarySearch(arr, target, start, end));
