
### ✅ Q1. Print "Hello World" N Times

```js
function printHelloWorld(n) {
  for (let i = 1; i <= n; i++) {
    console.log("Hello World");
  }
}
printHelloWorld(5);
```

**Algorithm**:

* Loop from `1` to `n` and print "Hello World" on each iteration.

---

### ✅ Q2. Print Natural Numbers up to N

```js
function printNatural(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
printNatural(5);
```

**Algorithm**:

* Traverse from `1` to `n` and print each number.

---

### ✅ Q3. Reverse Loop (Print N to 1)

```js
function reverseNatural(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
reverseNatural(5);
```

**Algorithm**:

* Loop from `n` to `1` in reverse using `i--`.

---

### ✅ Q4. Table of a Number (up to 10 terms)

```js
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}
printTable(5);
```

**Algorithm**:

* Loop from 1 to 10, multiply with `num`, and print.

---

### ✅ Q5. Sum Up to N Terms

```js
function sumUptoN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log("Sum:", sum);
}
sumUptoN(5);
```

**Algorithm**:

* Use a variable `sum`, loop from `1` to `n`, and accumulate in sum.

---

### ✅ Q6. Factorial of a Number

```js
function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  console.log("Factorial:", fact);
}
factorial(5);
```

**Algorithm**:

* Initialize `fact=1`, multiply `i` from `2` to `n`.

---

### ✅ Q7. Sum of Even and Odd Numbers in Range

```js
function evenOddSum(n) {
  let even = 0, odd = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) even += i;
    else odd += i;
  }
  console.log("Even Sum:", even);
  console.log("Odd Sum:", odd);
}
evenOddSum(10);
```

**Algorithm**:

* Loop from `1` to `n`, check parity using `%2`, and sum accordingly.

---

### ✅ Q8. All Factors of a Number

```js
function printFactors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) console.log(i);
  }
}
printFactors(12);
```

**Algorithm**:

* Loop from `1` to `n`, if `n % i === 0`, then `i` is a factor.

---

### ✅ Q9. Check Prime (Three Methods)

---

#### ➤ Method 1: Check from 1 to n

```js
function isPrime1(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count === 2;
}
console.log(isPrime1(7)); // true
```

* **Time Complexity**: O(n)

---

#### ➤ Method 2: Check from 2 to n/2

```js
function isPrime2(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime2(7)); // true
```

* **Time Complexity**: O(n/2)

---

#### ➤ Method 3: Optimized (sqrt(n))

```js
function isPrime3(n) {
  if (n <= 1) return false;
  if(n == 2) return true;
  if(n%2 == 0) return false;
  for (let i = 3; i * i <= n; i+=2) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime3(7)); // true
```

* **Time Complexity**: O(√n)
* **Why Efficient?** Because any non-prime number `n` must have at least one factor less than or equal to √n.

---

## 📘 JavaScript Topics & Number Programs

---

Certainly! Here's how you can solve the `a^b` (power of a number) problem using an **iterative approach** (i.e., without using `Math.pow()` or recursion):

---

### ✅ Iterative Power Function in JavaScript

```js
function powerIterative(a, b) {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result *= a;
  }
  return result;
}

console.log(powerIterative(2, 5)); // Output: 32
```

---

### 💡 **Algorithm Explanation**:

1. Initialize `result = 1`.
2. Loop `b` times:

   * Multiply `result` by `a` in each iteration.
3. Return the final `result`.

---

This is a **basic iterative method** with **Time Complexity: O(b)**.


### ✅ `break` and `continue` (Demo)

```js
// break example
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Output: 1, 2

// continue example
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1, 2, 4, 5
```

**Explanation**:

* `break`: exits the loop immediately.
* `continue`: skips current iteration and goes to next loop cycle.

---

### ✅ `while` loop: Print numbers from 1 to 5

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

**Explanation**:

* `while` loop checks the condition before each iteration.

---

### ✅ Q. Sum of Digits

```js
function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(sumOfDigits(891)); // Output: 18
```

**Algorithm**:

* Extract each digit using `n % 10`
* Add it to `sum`
* Remove last digit with `Math.floor(n / 10)`

---

### ✅ Q. Reverse of a Number

```js
function reverseNumber(n) {
  let rev = 0;
  while (n > 0) {
    rev = rev * 10 + n % 10;
    n = Math.floor(n / 10);
  }
  return rev;
}
console.log(reverseNumber(891)); // Output: 198
```

**Algorithm**:

* Multiply `rev` by 10 and add last digit of `n` in each step.

---

### ✅ Q. Strong Number

*A number is strong if sum of factorials of its digits equals the number.*
**e.g., 145 = 1! + 4! + 5! = 145**

```js
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

function isStrong(num) {
  let sum = 0, temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    sum += factorial(digit);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}
console.log(isStrong(145)); // true
```

**Algorithm**:

* Calculate factorial of each digit.
* Sum them and compare with original number.

---


### ✅ **Automorphic Number (Using Digit Count and Modulo)**

```js
function isAutomorphic(n) {
  let square = n * n;

  // Step 1: Count digits of n
  let count = 0;
  let temp = n;
  while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
  }

  // Step 2: Find modulus base = 10^count
  let base = 1;
  for (let i = 0; i < count; i++) {
    base *= 10;
  }

  // Step 3: Check if last 'count' digits of square match n
  return square % base === n;
}

// Example
console.log(isAutomorphic(76));  // true
console.log(isAutomorphic(25));  // true
console.log(isAutomorphic(7));   // false
```

---

### 💡 **Algorithm Explanation**:

1. **Square the number** → `n * n`.
2. **Count the digits of `n`** using a `while` loop.
3. **Calculate 10^count** to extract last `count` digits from the square.
4. **Use modulus**: `square % (10^count)` should be equal to `n` if it's automorphic.

This approach sticks to core logic and arithmetic only.
---

## 🔄 **Switch Statement in JavaScript – Full Concept**

---

### ✅ **1. Purpose**

The `switch` statement allows you to **execute one block of code** among many options **based on the value of an expression**, especially when you have **multiple conditions** to check.

---

### 🧠 **2. Syntax**

```javascript
switch(expression) {
  case value1:
    // Code block for value1
    break;
  case value2:
    // Code block for value2
    break;
  ...
  default:
    // Code block if no case matches
}
```

---

### 🔍 **3. How It Works**

* The `expression` inside `switch(expression)` is evaluated once.
* It's compared to each `case value`.
* If a match is found, the **matching block executes**.
* The `break` statement ends the switch block.
* If no match is found, the `default` block executes (optional).

---

### 💥 **4. `break` Statement**

* **Prevents fall-through.**
* Without `break`, execution **continues into the next case**, even if the match is already found.

```javascript
let x = 2;

switch(x) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
}
```

**Output:** `Two`

---

### 🚨 **5. Fall-Through (When `break` is omitted)**

```javascript
let color = "blue";

switch(color) {
  case "blue":
    console.log("Blue");
  case "green":
    console.log("Green");
  default:
    console.log("Default color");
}
```

**Output:**

```
Blue  
Green  
Default color
```

**Explanation:** All cases below the match get executed because there’s no `break`.

---

### 💡 **6. `default` Case**

* Optional block.
* Executes **only if no other `case` matches**.
* Acts like `else` in `if-else`.

---

### 🧪 **7. Strict Comparison (`===`)**

* `switch` uses **strict comparison**, like `===` (type + value must match).

```javascript
switch(10) {
  case "10": // not matched
    console.log("String");
    break;
  case 10: // matched
    console.log("Number");
    break;
}
```

**Output:** `Number`

---

### 🔄 **8. Grouping Cases (Fall-Through on Purpose)**

```javascript
let fruit = "apple";

switch(fruit) {
  case "apple":
  case "mango":
    console.log("Sweet fruit");
    break;
  case "lemon":
    console.log("Sour fruit");
    break;
}
```

**Output:** `Sweet fruit`

---

### 🛠️ **9. Real-World Example**

**Menu-Driven Program:**

```javascript
let option = 2;

switch(option) {
  case 1:
    console.log("Start");
    break;
  case 2:
    console.log("Settings");
    break;
  case 3:
    console.log("Exit");
    break;
  default:
    console.log("Invalid Option");
}
```

---

### 🧾 **10. Use Case Examples**

* Menus
* Day-of-week mapping
* Role-based access
* Command-line tools

---

### 📌 **When to Use `switch` vs `if-else`**

| Use `switch`                    | Use `if-else`                                          |
| ------------------------------- | ------------------------------------------------------ |
| Many discrete values            | Range or complex conditions                            |
| Simple comparisons              | Uses relational (`<`, `>`) or logical (`&&`) operators |
| Cleaner for multiple `==`/`===` | Flexible but longer                                    |

---