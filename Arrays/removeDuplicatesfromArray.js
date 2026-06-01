let arr = [1, 2, 2, 3, 4, 4, 4, 6, 6, 7];
let arrey = [];
let i = 0;
for (i = 0; i < arr.length; i++) {
  if (arrey.includes(arr[i])) {
    arrey.push();
  } else {
    arrey.push(arr[i]);
  }
}
console.log(arrey);
