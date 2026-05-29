let prompt = require("prompt-sync")();

let isbn = Number(prompt("Enter 10 digit ISBN number: "));
let copy = isbn;
let sum = 0;
let digit = 0;
let i = 1;
let len_isbn = String(isbn);
if (len_isbn.length != 10) {
  console.log(isbn + " is invalid input, please enter valid input.");
} else {
  while (copy > 0) {
    digit = copy % 10;
    copy = Math.floor(copy / 10);
    sum += digit * i;
    i++;
  }
  console.log(sum % 11 ? "Invalid ISBN." : " Valid ISBN");
}
