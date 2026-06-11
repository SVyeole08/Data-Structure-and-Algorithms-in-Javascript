let prompt = require("prompt-sync")();
const raw = () => {
  let arr = [3, 5, 7, 7, 8, 9, 10, 34, 56, 78, 89, 99];
  let target = Number(prompt("Enter your target: "));
  let start = 0;
  let end = arr.length - 1;
  let index = -1;
  while (start <= end) {
    if (target == arr[start]) {
      index = start;
      break;
    } else if (target == arr[end]) {
      index = end;
      break;
    } else {
      start++;
      end--;
    }
  }
  if (index == -1) {
    console.log("Element not found.");
  } else {
    console.log("Target found at " + index + " index.");
  }
};

let arr = [
  12, 23, 34, 45, 56, 76, 78, 89, 90, 123, 234, 345, 456, 567, 568, 678,
];
let target = Number(prompt("Enter your target: "));
let index = -1;
if (BinarySearch(arr, target) == -1) {
  console.log("Element not found.");
} else {
  console.log("Target found at " + index + " index.");
}

function BinarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (target == arr[mid]) return index=mid;
    else if (target > arr[mid]) start = mid + 1;
    else end = mid - 1;
  }
  return index=-1;
}
