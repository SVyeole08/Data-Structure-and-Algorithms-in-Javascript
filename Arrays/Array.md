
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

## 📘 **Everything About Arrays in JavaScript**

### 🔹 **1. What is an Array?**

* An **array** is a special variable that can store **multiple values** in a single variable.
* Arrays are **zero-indexed**, meaning indexing starts from 0.
* Arrays in JS are **dynamic** and can hold **mixed data types**.

```js
let fruits = ["apple", "banana", "cherry"];
let mixed = [1, "two", true, null];
```

---

### 🔹 **2. Ways to Declare Arrays**

```js
let arr1 = [1, 2, 3];              // Most common
let arr2 = new Array(4, 5, 6);     // Using constructor
let arr3 = new Array(5);           // Array of length 5 with empty slots
```

---

### 🔹 **3. Accessing & Modifying Elements**

```js
let a = [10, 20, 30];
console.log(a[1]);   // 20
a[1] = 25;           // Modify value
console.log(a);      // [10, 25, 30]
```

---

### 🔹 **4. Array Properties and Methods**

#### ➤ **Length**

```js
let nums = [1, 2, 3];
console.log(nums.length);  // 3
```

#### ➤ **Add/Remove Methods**

| Method      | Description                |
| ----------- | -------------------------- |
| `push()`    | Add to end                 |
| `pop()`     | Remove from end            |
| `unshift()` | Add to beginning           |
| `shift()`   | Remove from beginning      |
| `splice()`  | Add/remove at specific pos |
| `slice()`   | Returns part of array      |

```js
let arr = [1, 2, 3];
arr.push(4);       // [1,2,3,4]
arr.pop();         // [1,2,3]
arr.unshift(0);    // [0,1,2,3]
arr.shift();       // [1,2,3]
```

---

### 🔹 **5. Traversing Arrays**

```js
let arr = [10, 20, 30];

// for loop
for(let i=0; i<arr.length; i++) {
  console.log(arr[i]);
}

// for-of
for(let val of arr) {
  console.log(val);
}

```
### 🧠 **Real-World Examples**

* Storing user scores
* Managing shopping cart items
* Storing database rows
* Navigating image slides

## ✅ Setup: Install `prompt-sync` (if not installed)

```bash
npm install prompt-sync
```

```js
const prompt = require('prompt-sync')();
```

---

## 🔹 **1. Accept values from user and assign in the array**

### ✅ Code:

```js
const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter number of elements: "));
let arr = [];

for (let i = 0; i < n; i++) {
  let val = Number(prompt(`Enter value ${i + 1}: `));
  arr.push(val);
}

console.log("Entered Array:", arr);
```

### 📘 Algorithm:

1. Take user input for number of elements.
2. Loop `n` times:

   * Ask user to input each value.
   * Push the value into the array.
3. Print the final array.

---

## 🔹 **2. Q23: Sum of array's elements**

### ✅ Code:

```js
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("Sum of array elements:", sum);
```

### 📘 Algorithm:

1. Initialize `sum = 0`.
2. Loop through the array:

   * Add each element to `sum`.
3. Print the final `sum`.

---

## 🔹 **3. Q24: Find max element in the array**

### ✅ Code:

```js
let max = arr[0];  // Assume first element is max
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Maximum element in array:", max);
```

### 📘 Algorithm:

1. Assume the first element is the max.
2. Loop from index 1 to end:

   * If any element is greater than current `max`, update `max`.
3. Print the maximum value.

---
Displaying Day35.md.