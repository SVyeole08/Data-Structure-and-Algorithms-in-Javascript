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
// electricity();

//Problem Statement: Indian Currency Notes Breakdown
const currency = () => {
  let amount = Number(prompt("Enter the number:- "));
  let copy = amount;

  let count_2k = Math.floor(copy / 2000);
  copy = copy - count_2k * 2000;
  console.log(copy);
  let count_5h = Math.floor(copy / 500);
  copy = copy - count_5h * 500;
  console.log(copy);
  let count_2h = Math.floor(copy / 200);
  copy = copy - count_2h * 200;
  console.log(copy);
  let count_h = Math.floor(copy / 100);
  copy = copy - count_h * 100;
  console.log(copy);
  let count_l = Math.floor(copy / 50);
  copy = copy - count_l * 50;
  console.log(copy);
  let count_20 = Math.floor(copy / 20);
  copy = copy - count_20 * 20;
  console.log(copy);
  let count_10 = Math.floor(copy / 10);
  copy = copy - count_10 * 10;
  console.log(copy);
  let count_5 = Math.floor(copy / 5);
  copy = copy - count_10 * 5;
  console.log(copy);
  let count_2 = Math.floor(copy / 2);
  copy = copy - count_10 * 2;
  console.log(copy);
  let count_1 = Math.floor(copy / 1);
  copy = copy - count_10 * 1;
  console.log(copy);

  console.log("₹2000 * " + count_2k);
  console.log("₹500 * " + count_5h);
  console.log("₹200 * " + count_2h);
  console.log("₹100 * " + count_h);
  console.log("₹50 * " + count_l);
  console.log("₹20 * " + count_20);
  console.log("₹10 * " + count_10);
  console.log("₹5 * " + count_5);
  console.log("₹2 * " + count_2);
  console.log("₹1 * " + count_1);
};
// currency();

const currency2 = () => {
  let amount = Number(prompt("Enter the number:- "));
  let copy = amount;

  let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  for (let note of notes) {
    let count = Math.floor(copy / note);

    if (count > 0) {
      console.log(`₹${note} * ${count}`);
    }
    copy = copy % note;
  }
};
// currency2();

//Movie rating:
const movierate = () => {
  let rate = Number(prompt("Enter rating of movie between 0.0 - 5.0:- "));
  let movie = prompt("Enter the name of movie:- ");
  if (rate >= 0.0 && rate <= 2.0) {
    console.log(`${movie} is a Flop`);
  } else if (rate >= 2.1 && rate <= 3.4) {
    console.log(`${movie} is a Semi-hit`);
  } else if (rate >= 3.5 && rate <= 4.5) {
    console.log(`${movie} is a Hit`);
  } else if (rate >= 4.6 && rate <= 5.0) {
    console.log(`${movie} is a Super Hit`);
  } else {
    console.log("Enter rating between 0.0 - 5.0");
  }
};
// movierate();

//Salary:
let qualification = prompt("Enter your qualification (PG/Graduate): ");
let yos = Number(prompt("Enter your year of service: "));
let gen = prompt("Enter your Gender(F/M): ");
let salary = 0;
if (gen == "M") {
  if (qualification == "PG") {
    if (yos >= 10) {
      salary = 15000;
      console.log(`Your salary is ${salary}`);
    } else if (yos < 10 && yos > 0) {
      salary = 10000;
      console.log(`Your salary is ${salary}`);
    } else {
      console.log("Enter correct Year of Service.");
    }
  } else if (qualification == "Graduate") {
    if (yos >= 10) {
      salary = 10000;
      console.log(`Your salary is ${salary}`);
    } else if (yos < 10 && yos > 0) {
      salary = 7000;
      console.log(`Your salary is ${salary}`);
    } else {
      console.log("Enter correct Year of Service.");
    }
  } else {
    console.log("Enter valid qualification.");
  }
} else if (gen == "F") {
  if (qualification == "PG") {
    if (yos >= 10) {
      salary = 12000;
      console.log(`Your salary is ${salary}`);
    } else if (yos < 10 && yos > 0) {
      salary = 10000;
      console.log(`Your salary is ${salary}`);
    } else {
      console.log("Enter correct Year of Service.");
    }
  } else if (qualification == "Graduate") {
    if (yos >= 10) {
      salary = 9000;
      console.log(`Your salary is ${salary}`);
    } else if (yos < 10 && yos > 0) {
      salary = 6000;
      console.log(`Your salary is ${salary}`);
    } else {
      console.log("Enter correct Year of Service.");
    }
  } else {
    console.log("Enter valid qualification.");
  }
}
