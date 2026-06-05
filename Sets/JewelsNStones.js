let prompt = require("prompt-sync")();
let jwl = prompt("Enter jewel: ");
let stn = prompt("Enter stones: ");

let set_jwl = new Set(jwl);
let count = 0;
for (let i = 0; i < stn.length; i++) {
  let ch = stn[i];
  if (set_jwl.has(ch)) count++;
}
console.log(count + " jewels present in stone.");
