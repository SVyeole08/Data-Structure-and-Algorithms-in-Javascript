//strings are immutable in nature
//strings are sequence of character
//string behaves like array
let prompt = require("prompt-sync")();

//prints every letter of string
const st = () => {
  let s = prompt("Enter your character: ");
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
  }
};

const reverse = () => {
  let rev = "";
  let s = prompt("Enter your character: ");
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i]; /* s.charAt(i) does the same thing as s[i] */
  }
  console.log(rev);
};
reverse()