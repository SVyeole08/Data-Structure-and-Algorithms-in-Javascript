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

//Otp Generator:
const Otp = () => console.log(Math.floor(Math.random() * 1000000));

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

//Dice:
const dice = () => {
  d = Math.trunc(Math.random() * 10);
  if (d <= 6 && d >= 1) {
    console.log(d);
  }
};
