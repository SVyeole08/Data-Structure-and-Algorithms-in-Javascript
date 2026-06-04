let prompt = require("prompt-sync")();
let s = prompt("Enter your character: ").trim();

let tog = "";
const m1 = () => {
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 92) {
      tog += s.charAt(i).toLowerCase();
    } else if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 124) {
      tog += s.charAt(i).toUpperCase();
    }
  }
};

const m2 = () => {
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 92) {
      tog += String.fromCharCode(s.charCodeAt(i) + 32);
    } else if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 124) {
      tog += String.fromCharCode(s.charCodeAt(i) - 32);
    }
  }
};
m2();

console.log(tog);
