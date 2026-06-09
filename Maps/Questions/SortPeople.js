let prompt = require("prompt-sync")();
3;
let size = Number(prompt("Enter size of array: "));
let peo = new Array();
let hei = new Array();

for (let i = 0; i < size; i++) {
  peo[i] = prompt("Enter name of person:");
  hei[i] = prompt("Enter height of person:");
}

let map = new Map();
for (let i = 0; i < peo.length; i++) {
  map.set(hei[i], peo[i]);
}
hei.sort((a, b) => b - a);
let ans = new Array();
for (let i = 0; i < hei.length; i++) {
  ans[i] = map.get(hei[i]);
}
console.log(ans);
