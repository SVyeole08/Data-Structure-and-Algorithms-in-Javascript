let prompt = require("prompt-sync")();

let pan = prompt("Enter a sentence: ");
const m1 = () => {
  let set = new Set();
  for (let i = 0; i < pan.length; i++) {
    let ch = pan.charCodeAt(i);
    set.add(ch);
  }

  if (set.size == 26) console.log(pan + " is a pangram.");
  else console.log(pan + " is not a pangram.");
};

const m2 = () => {
  let set = new Set(pan);
  if (set.size == 26) console.log(pan + " is a pangram.");
  else console.log(pan + " is not a pangram.");
};
m2();
