const prompt = require("prompt-sync")();
//Compound Interest:
const compound_interest = () => {
  let p = Number(prompt("Enter the Principle:-"));
  let r = Number(prompt("Enter the Rate of Interest:-"));
  let t = Number(prompt("Enter the Period of time:-"));

  let a = p * Math.pow(1 + r / 100, t);
  let i = a - p;

  console.log(i);
};
// compound_interest();

//Otp Generator:
const Otp = () => console.log(Math.floor(Math.random() * 1000000));
// Otp();

//Area of triangle by heron's formula
const areat = () => {
  let a = Number(prompt("Enter first side of triangle:-"));
  let b = Number(prompt("Enter seccond side of triangle:-"));
  let c = Number(prompt("Enter third side of triangle:-"));

  if (a + b <= c || a + c <= b || b + c <= a) {
    console.log(
      "Values of sides are too small that area of triangle is not measurable.",
    );
  } else {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area.toFixed(3));
  }
};
// areat();

//Circumference of Circle
const circum = () => {
  let r = Number(prompt("Enter radius of circle:-"));
  if (r >= 0) {
    let c = 2 * Math.PI * r;
    console.log("Circumference of circle is", c);
  } else {
    console.log("Value of radius must be positive.");
  }
};
// circum();

//Dice:
const dice = () => {
  d = Math.trunc(Math.random() * 10);
  if (d <= 6 && d >= 1) {
    console.log(d);
  }
};
// dice();

//Leap Year:
const leap = () => {
  let isLeap = false;
  let year = Number(prompt("Enter the year :-"));

  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) isLeap = true;
      else isLeap = false;
    } else {
      isLeap = true;
    }
  } else isLeap = false;

  if (isLeap) console.log(year + " is a leap year");
  else console.log(year + " is not a leap year");
};
// leap();

//Leap year:
const leap2 = () => {
  let isLeap = false;
  let year = Number(prompt("Enter the year :-"));

  if (year % 4 == 0 && year % 100 != 0) {
    isLeap = true;
  } else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    isLeap = true;
  } else isLeap = false;

  if (isLeap) console.log(year + " is a leap year");
  else console.log(year + " is not a leap year");
};
// leap2();

//Shop discount:
const shop = () => {
  let amount = Number(
    prompt("Enter the amount of which products you have purchased: "),
  );
  let dis = 0;
  if (amount <= 5000 && amount >= 0) {
    dis = 0;
  } else if (amount <= 7000 && amount >= 5001) {
    dis = 5;
  } else if (amount <= 9000 && amount >= 7001) {
    dis = 10;
  } else if (amount > 9000) {
    dis = 20;
  } else {
    console.log("Please enter valid amount.");
  }
  console.log(
    "Your payable amount is " +
      (amount - (amount * dis) / 100) +
      " after applying " +
      dis +
      "% discount.",
  );
};
// shop();

//Electricity bill:
const electricity = () => {
  let unit = Number(prompt("Enter the electricity units:- "));

  let amount = 0;
  if (unit >= 0 && unit <= 100) {
    amount = unit * 4.2;
  } else if (unit >= 101 && unit <= 200) {
    amount = 100 * 4.2 + (unit - 100) * 6;
  } else if (unit >= 201 && unit <= 400) {
    amount = 100 * 4.2 + 100 * 6 + (unit - 200) * 8;
  } else if (unit >= 401) {
    amount = 100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13;
  } else {
    console.log("Enter valid input.");
  }
  console.log("Your electricity bill is " + amount + "₹");
};
electricity();
