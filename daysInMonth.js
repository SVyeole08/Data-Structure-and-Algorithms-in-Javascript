let prompt = require("prompt-sync")();

let year = Number(prompt("Enter year: "));
let month = Number(prompt("Enter number of month:"));
let days = 0;
if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
) {
  days = 31;
  console.log("Days in " + month + "nd month and " + year + " is " + days);
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
  days = 30;
  console.log("Days in " + month + "nd month and " + year + " is " + days);
} else if (month == 2) {
  if (year % 4 == 0 && year % 100 != 0) {
    days = 29;
    console.log("Days in " + month + "nd month and " + year + " is " + days);
  } else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    days = 29;
    console.log("Days in " + month + "nd month and " + year + " is " + days);
  } else {
    days = 28;
    console.log("Days in " + month + "nd month and " + year + " is " + days);
  }
} else console.log("Please enter valid input.");
