let prompt = require("prompt-sync")();
let str = prompt("Enter:");
let map = new Map();
for (let i = 0; i < str.length; i++) {
  let ch = str.charAt(i);
  if (map.has(ch)) {
    map.set(ch, map.get(ch) + 1);
    if (map.get(ch) == 2) {
      console.log(ch);
      break;
    }
  } else map.set(ch, 1);
}
