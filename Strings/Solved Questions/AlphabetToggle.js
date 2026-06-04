let prompt = require("prompt-sync")();
let s = prompt("Enter your character: ").trim();

let tog = "";
for (let i = 0; i < s.length; i++) {
  if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 92) {
    tog += s.charAt(i).toLowerCase();
  } else if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 124) {
    tog += s.charAt(i).toUpperCase();
  }
}
console.log(tog);
