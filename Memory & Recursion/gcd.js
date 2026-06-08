let prompt = require("prompt-sync")();
let n1 = Number(prompt("Enter n1 number: "));
let n2 = Number(prompt("Enter n1 number: "));

function gcd(n1, n2) {
  if (n1 == n2) return n1;
  if (n1 > n2) return gcd(n1 - n2, n2);
  return gcd(n1, n2 - n1);
}
console.log(gcd(n1, n2));

function gcd2(n1, n2) {
  if (n2 == 0) return n2;
  return gcd(n2, n1 % n2);
}
console.log(gcd2(n1, n2));
