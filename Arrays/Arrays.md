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
arr.pop();         // [1,2]
arr.unshift(0);    // [0,1,2,3]
arr.shift();       // [2,3]
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

## 🔹 **Accept values from user and assign in the array**

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

## 🔹 **Sum of array's elements**

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

## 🔹 **Find max element in the array**

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


## 🔹 **Maximum Subarray**

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

## **Majority Element**

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

| i   | nums[i] | ans | count | Action                   |
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

## **Best Time to Buy and Sell Stock**

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


## **Sort Colors (Dutch National Flag Algorithm)**

```js
var swap = function(nums , i , j){
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
```

* A simple helper function to swap two elements in the array `nums`.

```js
var sortColors = function(nums) {
    let i = 0, j = 0, k = nums.length - 1;
```

* `i`: current index we're inspecting.
* `j`: boundary for `0`s (start of the array).
* `k`: boundary for `2`s (end of the array).

```js
    while (i <= k) {
```

* Loop continues as long as `i` hasn’t crossed the `2` region (`k`).

```js
        if (nums[i] == 0) swap(nums, i++, j++);
```

* If the number is `0`, swap it to the front (`j`) and move both `i` and `j` forward.

```js
        else if (nums[i] == 2) swap(nums, i, k--);
```

* If the number is `2`, move it to the back (`k`), but don’t move `i` forward since we need to re-check the swapped value.

```js
        else i++;
    }
};
```

* If the number is `1`, just move `i` forward.

---

## **Trapping Rain Water**

```js
var trap = function(height) {
    let left = new Array(height.length)
    let right = new Array(height.length)
```

* Arrays to store max height to the **left** and **right** of each bar.

```js
    let maxLeft = height[0], maxRight = height[height.length-1];
    left[0] = maxLeft , right[right.length-1] = maxRight
```

* Initialize edge values for left and right max arrays.

```js
    for (let i = 1; i < height.length; i++) {
        maxLeft = Math.max(height[i], maxLeft)
        left[i] = maxLeft;
    }
```

* Build the `left[]` array: at each index, store the **maximum height from the left** up to that point.

```js
    for (let i = height.length - 2; i >= 0; i--) {
        maxRight = Math.max(height[i], maxRight)
        right[i] = maxRight;
    }
```

* Build the `right[]` array: at each index, store the **maximum height from the right** up to that point.

```js
    let ans = 0;
    for (let i = 0; i < height.length; i++) {
        ans += Math.min(left[i], right[i]) - height[i]
    }
```

* At each index, the trapped water = `min(leftMax, rightMax) - currentHeight`

```js
    return ans;
};
```

* Return total trapped water.

---

## **Container With Most Water**

### 📌 Brute Force (O(n²)) – Method 1:

```js
var maxArea = function(height) {
    let maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let width = j - i;
            let minHeight = Math.min(height[i], height[j]);
            maxArea = Math.max(maxArea, width * minHeight);
        }
    }
    return maxArea;
};
```

### 🔍 Line-by-Line:

* Try **every pair (i, j)**.
* For each pair, calculate:

  * Width = `j - i`
  * Height = `min(height[i], height[j])`
  * Area = width × height
* Update `maxArea` if this area is greater.

---

### ✅ Two-Pointer (O(n)) – Method 2:

```js
var maxArea = function(arr) {
    let maxArea = 0;
    let i = 0, j = arr.length - 1;
```

* Two pointers: `i` starts at left, `j` at right.

```js
    while (i != j) {
        maxArea = Math.max(maxArea, Math.min(arr[i], arr[j]) * (j - i));
```

* Compute area between lines at `i` and `j`:

  * Height = min(arr\[i], arr\[j])
  * Width = j - i

```js
        if (arr[i] < arr[j]) i++;
        else j--;
    }
    return maxArea;
};
```

* Move the pointer that has the **smaller height**, in hopes of finding a **taller wall** and increasing area.

## ✅ **Leetcode 15 – 3Sum**

### 🧩 **Problem Statement**

Given an array `nums`, return all unique triplets `[nums[i], nums[j], nums[k]]` such that:

* `i != j`, `i != k`, and `j != k`
* `nums[i] + nums[j] + nums[k] == 0`

### 🎯 **Goal**: Find all unique triplets in O(n²) time and O(1) extra space (besides output list).

---

### 🔍 **Brute Force Approach (O(n³))**

```javascript
function threeSumBruteForce(nums) {
    let result = new Set();
    let n = nums.length;
    
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    result.add(triplet.toString());
                }
            }
        }
    }

    // Convert set back to array of arrays
    return result;
}
```

#### 🔍 Explanation:

* We check **all combinations** of `i, j, k`.
* We use a **Set** to avoid duplicates by sorting and storing as string.
* Time: **O(n³)** due to 3 nested loops.
* Space: **O(n)** due to Set for duplicate checking.

---

### 🚀 **Optimized 2-Pointer Approach (O(n²)) and O(1) extra space**

```javascript
function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort first
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Skip duplicates
                while (nums[left] === nums[left - 1]) left++;
                while (nums[right] === nums[right + 1]) right--;

            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}
```

#### 🔍 Explanation

* Sort the array → O(n log n)
* For each number, use 2-pointer to find the pair that sums to `-nums[i]`.
* Skip duplicates smartly.
* Time: **O(n²)**
* Space: **O(1)** (excluding output array)

---
