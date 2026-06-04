let prompt = require("prompt-sync")();
let str = prompt("Enter sentence: ");

let arr = new Array(123).fill(0);
for (let i = 0; i < str.length; i++) {
  let ascii = str.charCodeAt(i);
  arr[ascii]++;
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(String.fromCharCode(i) + " -> " + arr[i]);
  }
}
