let prompt = require("prompt-sync")();
let str = prompt("Enter sentence: ");
let arr = str.split(" ");
let sent = "";
for (let i = 0; i < arr.length; i++) {
  let word = arr[i];
  if (word.length <= 2) sent += word.toUpperCase() + " ";
  else {
    sent +=
      word.charAt(0).toUpperCase() +
      word.substring(1, word.length - 1) +
      word.charAt(word.length - 1).toUpperCase() +
      " ";
  }
}
console.log(sent);
