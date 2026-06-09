let prompt = require("prompt-sync")();
let num = [2, 4, 3, 7];
let map = new Map();
let target = Number(prompt("Enter target: "));
let ans = [-1, -1];
for (let i = 0; i < num.length; i++) {
  if (map.has(target - num[i])) {
    ans[0] = map.get(target - num[i], i);
    ans[1] = i;
    console.log(ans);
  } else map.set(num[i], i);
}