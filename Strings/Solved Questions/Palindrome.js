let prompt = require("prompt-sync")();
let s = prompt("Enter your character: ");
s.trim();

const m1 = () => {
  let rev = "";
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }
  if (s == rev) {
    console.log(s + " is a palindrome.");
  } else {
    console.log(s + " is not a palindrome.");
  }
};

const m2 = () => {
  let sit = true;
  let k = 0;
  let j = s.length - 1;
  while (k < j) {
    if (s[k] == s[j]) {
      sit = true;
    } else {
      sit = false;
    }
    k++;
    j--;
  }

  if (sit) {
    console.log(s + " is palindrome");
  } else console.log(s + " is not palindrome");
};