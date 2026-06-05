let prompt = require("prompt-sync")();

let s1 = prompt("Enter first word: ").trim();
let s2 = prompt("Enter second word: ").trim();
let isAng = true;
let arr = new Array(123).fill(0);
if (s1.length != s2.length) isAng = false;
else {
  for (let i = 0; i < s1.length; i++) {
    let ascii = s1.charCodeAt(i);
    arr[ascii]++;
  }
  for (let i = 0; i < s2.length; i++) {
    let ascii = s2.charCodeAt(i);
    arr[ascii]--;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      isAng = false;
      break;
    }
  }
}

if (isAng) console.log(s1 + " and " + s2 + " are Anagrams.");
else console.log(s1 + " and " + s2 + " are not Anagrams.");
