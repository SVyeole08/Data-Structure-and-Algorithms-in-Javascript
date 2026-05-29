const prompt = require("prompt-sync")();
/* Math problems */
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

/* Conditional Problems */
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
const salaryCalc = () => {
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
};
// salaryCalc();

/* Loop problems */
const natural_nums = () => {
  let n = Number(prompt("Enter the number:"));
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};
// natural_nums();

const reverse_nums = () => {
  let n = Number(prompt("Enter the number:"));
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
};
// reverse_nums();

const table = () => {
  let n = Number(prompt("Enter the number to print its table: "));
  let m = Number(prompt("Enter the number till you want its table: "));
  for (let i = 1; i <= m; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
};
// table();

const sum_n = () => {
  let n = Number(prompt("Enter the number:"));
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
};
// sum_n();

const factorial = () => {
  let n = Number(prompt("Enter the number:"));
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(fact);
};
// factorial();

const sum_even_odd = () => {
  let n = Number(prompt("Enter the number:"));
  let even = 0;
  let odd = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      even += i;
    } else {
      odd += i;
    }
  }
  console.log("Sum of even numbers is " + even);
  console.log("Sum of odd numbers is " + odd);
};
// sum_even_odd();

const factors = () => {
  let n = Number(prompt("Enter the number:"));
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
};
// factors();

const check_prime = () => {
  let n = Number(prompt("Enter the number:"));
  let fact = 0;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      fact = i;
      count++;
    }
  }
  if (count == 2) console.log(n + " is a prime");
  else if (count == 1) console.log(n + " is neither prime nor composite");
  else console.log(n + " is a composite");
};
// check_prime();

const check_prime_2 = () => {
  let n = Number(prompt("Enter the number:"));
  let isPrime = isPrimeFun(n);
  if (isPrime) console.log(n + " is a prime number");
  else console.log(n + " is composite number");

  function isPrimeFun(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
      if (n % i == 0) return false;
    }
    return true;
  }
};
// check_prime_2();

const exponent = () => {
  let n = Number(prompt("Enter the number: "));
  let m = Number(prompt("Enter the power: "));
  let exp = Math.pow(n, m);
  console.log(n + "^" + m + "=" + exp);
};
// exponent();

//While loop problems:
const sum_digits = () => {
  let n = Number(prompt("Enter a number:"));
  let copy = n;
  let sum = 0;
  while (copy > 0) {
    let digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy / 10);
  }
  console.log("Sum of digits of " + n + " is " + sum);
};
// sum_digits();

const rev_num = () => {
  let n = Number(prompt("Enter a number:"));
  let copy = n;
  let rev = 0;
  while (copy > 0) {
    let digit = copy % 10;
    rev = rev * 10 + digit;
    copy = Math.floor(copy / 10);
  }
  console.log(rev);
};
// rev_num();

const automorphic = () => {
  let n = Number(prompt("Enter a number: "));
  let copy = n;
  let sq = n * n;
  let count = 0;
  while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
  }
  if (sq % Math.pow(10, count) == n)
    console.log(n + " is an Automorphic number");
  else console.log(n + " is not an Automorphic number");
};
// automorphic();

//do-while problems:
const hello = () => {
  let n = Number(prompt("Enter the number till you want hello to print: "));
  let i = 1;
  do {
    console.log("hello");
    i++;
  } while (i <= n);
};
// hello();

const guess_num = () => {
  let com = Math.floor(Math.random() * 100 + 1);
  let userInput;
  do {
    userInput = Number(prompt("Enter no. between 1-100: "));
    if (isNaN(userInput) || userInput <= 0 || userInput > 100) {
      console.log("Please enter valid no. between 1-100.");
      continue;
    }
    if (userInput > com) {
      console.log(userInput + " is high, try to go lower.");
    } else if (userInput < com) {
      console.log(userInput + " is low, try to go higher.");
    } else {
      console.log(
        "Congratulations you guessed it correctly, number was " + com,
      );
    }
  } while (com != userInput);
};
// guess_num();

//Nested Loop problems:
const star_square = () => {
  let n = Number(prompt("Enter a number: "));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
};
// star_square();

const star_tri1 = () => {
  let n = Number(prompt("Enter a number: "));
  for (let i = 1; i <= n; i++) {
    for (let j = n + 1 - i; j >= 1; j--) {
      process.stdout.write("* ");
    }
    console.log();
  }
};
// star_tri1();

const star_tri2 = () => {
  let n = Number(prompt("Enter a number: "));
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < i; k++) {
      process.stdout.write("  ");
    }
    for (let j = n - i; j > 0; j--) {
      process.stdout.write("* ");
    }
    console.log();
  }
};
// star_tri2();

const star_tri3 = () => {
  let n = Number(prompt("Enter a number: "));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
};
// star_tri3();

const star_tri4 = () => {
  let n = Number(prompt("Enter a number: "));
  for (let i = 1; i <= n; i++) {
    for (let k = n - i; k > 0; k--) {
      process.stdout.write("  ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
};
// star_tri4();

const num_tri3 = () => {
  let n = Number(prompt("Enter a number: "));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
};
// num_tri3();
let n = Number(prompt("Enter a number: "));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}
