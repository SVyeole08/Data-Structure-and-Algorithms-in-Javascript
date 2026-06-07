## 📌 JavaScript Math Functions

| Function         | Description                        | Example               | Output       |
| ---------------- | ---------------------------------- | --------------------- | ------------ |
| `Math.round()`   | Rounds to the nearest integer      | `Math.round(4.6)`     | `5`          |
| `Math.ceil()`    | Rounds up                          | `Math.ceil(4.2)`      | `5`          |
| `Math.floor()`   | Rounds down                        | `Math.floor(4.8)`     | `4`          |
| `Math.trunc()`   | Removes the decimal part           | `Math.trunc(4.9)`     | `4`          |
| `Math.pow(x, y)` | x to the power of y                | `Math.pow(2, 3)`      | `8`          |
| `Math.sqrt(x)`   | Square root                        | `Math.sqrt(16)`       | `4`          |
| `Math.cbrt(x)`   | Cube root                          | `Math.cbrt(27)`       | `3`          |
| `Math.abs()`     | Absolute value                     | `Math.abs(-5)`        | `5`          |
| `Math.max()`     | Max value                          | `Math.max(3, 5, 9)`   | `9`          |
| `Math.min()`     | Min value                          | `Math.min(3, 5, 9)`   | `3`          |
| `Math.random()`  | Random number (0–1)                | `Math.random()`       | `e.g. 0.572` |
| `toFixed(n)`     | Formats number to n decimal places | `(5.6789).toFixed(2)` | `"5.68"`     |

---

## 🧠 Math Problems with JavaScript

### ✅ Q. Calculate Compound Interest

```js
function compoundInterest(p, r, t) {
  let amount = p * Math.pow((1 + r / 100), t);
  return amount.toFixed(2);
}
console.log(compoundInterest(1000, 10, 2)); // 1210.00
```

**Algorithm**:

* Use formula: `CI = P * (1 + r/100)^t`
* Use `Math.pow()` to calculate exponent.
* Round to 2 decimal places using `.toFixed(2)`.

---

### ✅ Q. Area of Triangle (Heron’s Formula)

```js
function heronArea(a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area.toFixed(2);
}
console.log(heronArea(5, 6, 7)); // 14.70
```

**Algorithm**:

* Calculate semi-perimeter: `s = (a+b+c)/2`
* Use formula: `√(s(s-a)(s-b)(s-c))`

---

### ✅ Q. Generate OTP (4-digit)

```js
function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}
console.log(generateOTP()); // e.g., 4783
```

**Algorithm**:

* Generate a random number between 1000 and 9999 using `Math.random()` and `Math.floor()`.

---

### ✅ Q. Circumference of Circle

```js
function circumference(radius) {
  return (2 * Math.PI * radius).toFixed(2);
}
console.log(circumference(7)); // 43.98
```

**Algorithm**:

* Use formula: `2 * π * r`
* Use `Math.PI` for π.

---

## 🔁 IF-ELSE Problems

---

### ✅ Q. Print Greatest of Two Numbers

```js
function greater(a, b) {
  if (a > b) console.log(`${a} is greater`);
  else if (b > a) console.log(`${b} is greater`);
  else console.log("Both are equal");
}
greater(5, 10);
```

**Algorithm**:

* Compare `a` and `b` using if-else.

---

### ✅ Q. Even or Odd

```js
function evenOdd(n) {
  if (n % 2 === 0) console.log("Even");
  else console.log("Odd");
}
evenOdd(7);
```

**Algorithm**:

* Check remainder with `n % 2`.

---

### ✅ Q. Voter Eligibility

```js
function isVoter(name, age) {
  if (age >= 18) console.log(`${name} is a valid voter`);
  else console.log(`${name} is not eligible`);
}
isVoter("John", 20);
```

**Algorithm**:

* Check if age is 18 or more.

---

### ✅ Q. Greatest Among Three Numbers

```js
function greatest(a, b, c) {
  if (a >= b && a >= c) console.log(`${a} is greatest`);
  else if (b >= a && b >= c) console.log(`${b} is greatest`);
  else console.log(`${c} is greatest`);
}
greatest(10, 30, 20);
```

**Algorithm**:

* Use chained if-else to compare `a`, `b`, and `c`.

---