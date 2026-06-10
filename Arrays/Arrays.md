**Q. Strong Number**

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

🔹 ** Q: Sum of array's elements**

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

🔹 **Q: Find max element in the array**

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


 ** Q. Maximum Subarray**

**Goal:** Find the contiguous subarray (at least one number) with the **largest sum**.
**Classic Solution:** **Kadane's Algorithm**

---

### 🔹 Method 1: **Kadane’s Algorithm (Efficient)**

```js
var maxSubArray = function(nums) {
    let max = -Infinity;
    let sum =0;
    for(let i=0;i<nums.length;i++){
      sum += nums[i]
      max = Math.max(max , sum)
      if(sum<0) sum =0;
    }
    return max;
};
```

**🧠 Explanation (Kadane’s Algo):**

Step-by-Step:

Initialize:
max = -Infinity → to store the largest subarray sum found so far.
sum = 0 → current running sum of the subarray.

Traverse the array:
Add the current element to sum.
If sum is greater than max, update max.
If sum becomes negative, reset it to 0 (because continuing with a negative sum will hurt future subarrays).

Return max, the highest subarray sum encountered.

---

### 🔹 Method 2: **Brute Force (O(n²))**

```js
function maxSubArrayBrute(nums) {
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}
```

**🧠 Explanation:**

* Check all subarrays starting at index `i` and ending at `j`.
* Track the sum and update the max found so far.
* Less efficient: **O(n²)** time complexity.

---

**Q. Majority Element**

**Goal:** Find the element that appears **more than ⌊n / 2⌋ times**.

---

### 🔹 Method 1: **Boyer-Moore Voting Algorithm (O(n), O(1))**
### 🔍 Your Code:

```javascript
var majorityElement = function(nums) {
  let ans = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      ans = nums[i];
      count = 1;
    } else if (ans == nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return ans;
};
```

---

### ✅ **Step-by-Step Explanation (Boyer-Moore Voting Algorithm):**

1. **Initialize:**

   * `ans`: current **candidate** for majority element.
   * `count`: how confident we are that `ans` is the majority (starts at 1).

2. **Loop through array:**

   * If `count == 0`, reset `ans` to the current number and `count = 1`.
   * If the current number is **equal to `ans`**, increment `count`.
   * If it's **not equal**, decrement `count`.

3. **Logic Behind It:**

   * Every time a different element "cancels out" the current candidate by reducing `count`.
   * Since the majority element appears more than all others combined, it will **survive the cancellation process**.

---

### 🔁 Example Walkthrough:

```js
nums = [2, 2, 1, 1, 1, 2, 2]
```

| i   | nums\[i] | ans | count | Action                   |
| --- | -------- | --- | ----- | ------------------------ |
| 0   | 2        | 2   | 1     | Init                     |
| 1   | 2        | 2   | 2     | Same as ans → count++    |
| 2   | 1        | 2   | 1     | Different → count--      |
| 3   | 1        | 2   | 0     | Different → count-- → 0  |
| 4   | 1        | 1   | 1     | count == 0 → new ans = 1 |
| 5   | 2        | 1   | 0     | Different → count-- → 0  |
| 6   | 2        | 2   | 1     | count == 0 → new ans = 2 |

Final answer: `2`

---

### 🧠 Time and Space Complexity:

* **Time:** O(n)
* **Space:** O(1) (no extra memory used)

---

### 🔹 Method 2: **Hash Map Counting (O(n), O(n))**

```js
function majorityElementMap(nums) {
  let map = new Map();
  const majority = Math.floor(nums.length / 2);

  for (let num of nums) {
    // If the map already has this number, increment its count
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }

    // Check if this number is now the majority
    if (map.get(num) > majority) {
      return num;
    }
  }
}

```

**🧠 Explanation:**

Map is used to track how many times each number appears.
As soon as a number appears more than n / 2 times, return it.
The loop ensures that the solution is found in O(n) time.


---

**Q. Best Time to Buy and Sell Stock**

**Goal:** Find the **maximum profit** by buying and selling one stock.

---

### 🔹 Efficient Method: **Track Min Price + Max Profit**

```javascript
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}
```

**🧠 Explanation:**

* Traverse the array.
* Keep track of the **lowest price so far** (`minPrice`).
* At each step, calculate profit as `price - minPrice`.
* Update `maxProfit` if this profit is higher.
