# HashMap Questions

## 🔀 Intersection of Two Arrays

### ✅ Approach 1: Generic (Using Nested Loops)

```js
var intersection = function(nums1, nums2) {
    let result = [];
    for(let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i]) && !result.includes(nums1[i])) {
            result.push(nums1[i]);
        }
    }
    return result;
};
```

🔹 **Algorithm:**

1. Iterate through each element of `nums1`.
2. For each element, check if it is present in `nums2`.
3. If yes and not already in the result, add it to `result`.

🧠 Time Complexity: O(n \ m)

---

### ✅ Approach 2: Using Sets

```js
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let result = [];

    for (let val of set1) {
        if (set2.has(val)) {
            result.push(val);
        }
    }

    return result;
};
```

🔹 **Algorithm:**

1. Convert both arrays into sets to remove duplicates.
2. Loop through one set and check if the other set contains the value.
3. If yes, add it to result.

🧠 Time Complexity: O(n + m)

---

## ➕ Subarray Sum Equals K

### ✅ Brute Force Approach

```js
var subarraySum = function(nums, k) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) count++;
        }
    }
    return count;
};
```

🔹 **Algorithm:**

1. Try all possible subarrays.
2. Keep calculating the sum and compare with `k`.
3. Increment count if a match is found.

🧠 Time Complexity: O(n²)

---

### ✅ Optimized: Running Sum + Map

```js
var subarraySum = function(nums, k) {
    let map = new Map();
    map.set(0, 1);
    let sum = 0, count = 0;

    for (let num of nums) {
        sum += num;
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};
```

🔹 **Algorithm:**

1. Maintain cumulative sum.
2. Use a Map to store how many times a sum has occurred.
3. At each step, check if `sum - k` exists in Map → means a subarray with sum `k` exists.

🧠 Time Complexity: O(n)

---

## 📏 Longest Sub-Array with Sum K

### ✅ Optimized: Running Sum + Map

```js
function longestSubarrayWithSumK(nums, k) {
    let map = new Map();
    let sum = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum === k) {
            maxLength = i + 1;
        }

        if (!map.has(sum)) {
            map.set(sum, i);
        }

        if (map.has(sum - k)) {
            maxLength = Math.max(maxLength, i - map.get(sum - k));
        }
    }

    return maxLength;
}
```

🔹 **Algorithm:**

1. Keep a running sum of elements.
2. If `sum === k`, we found a subarray from start.
3. Otherwise, if `sum - k` is in map, then subarray from `map.get(sum - k) + 1` to `i` has sum `k`.
4. Track the maximum length.

🧠 Time Complexity: O(n)

---

## Contiguous Array

📌 **Goal:** Find the maximum length of a contiguous subarray with equal number of 0 and 1.

### ✅ Approach: Running Sum + Hash Map

```js
var findMaxLength = function(nums) {
    let map = new Map();
    map.set(0, -1); // sum 0 at index -1
    let maxLen = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;

        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }

    return maxLen;
};
```

🧠 **Algorithm:**

1. Convert 0 → -1 to reduce the problem to finding subarrays with sum = 0.
2. Use a hash map to store first occurrence of each `sum`.
3. If same `sum` reappears, it means the elements in between sum to 0.
4. Track the maximum length of such subarrays.

🕒 Time Complexity: `O(n)`

---

## Longest Consecutive Sequence

📌 **Goal:** Find the length of the longest sequence of consecutive integers.

### ✅ Approach: Using Set

```js
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) { // start of sequence
            let currentNum = num;
            let streak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                streak++;
            }

            longest = Math.max(longest, streak);
        }
    }

    return longest;
};
```

🧠 **Algorithm:**

1. Store all numbers in a Set to allow `O(1)` lookup.
2. For each number, only begin counting if it’s the start of a sequence (i.e., `num - 1` is not present).
3. Count consecutive numbers by checking if `num + 1`, `num + 2`, etc. exist.
4. Keep track of the maximum sequence length.

🕒 Time Complexity: `O(n)`

Certainly! Here's the **updated solution** for:

---

### ✅  Count Distinct Elements in Every Window (Updated Version)

🔄 **Modification:**

* First, build the initial frequency map for the **first `k` elements**
* Then slide the window from index `k` to `n - 1`

---

```js
function countDistinctInWindow(arr, k) {
    const result = [];
    const freqMap = new Map();

    // Step 1: Pre-process first window (0 to k - 1)
    for (let i = 0; i < k; i++) {
        freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
    }
    result.push(freqMap.size); // First window result

    // Step 2: Slide the window from index k to end
    for (let i = k; i < arr.length; i++) {
        // Remove the element going out of the window
        let outElem = arr[i - k];
        if (freqMap.get(outElem) === 1) {
            freqMap.delete(outElem);
        } else {
            freqMap.set(outElem, freqMap.get(outElem) - 1);
        }

        // Add the new element entering the window
        freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);

        // Store result for current window
        result.push(freqMap.size);
    }

    return result;
}
```

---

### 🧠 **Step-by-Step Algorithm:**

1. **Initialize** an empty Map to store frequencies.
2. **Traverse the first `k` elements** (from index `0` to `k - 1`) and build the initial frequency map.
3. **Push the size** of the map (number of distinct elements) to the result.
4. For **each index `i` from `k` to `n - 1`:**

   * Remove the frequency of element at `i - k`.
   * Add/update the frequency of current element `arr[i]`.
   * Push `map.size` into result.
5. Return the result array.

---

### ✅ Example:

```js
console.log(countDistinctInWindow([1, 2, 1, 3, 4, 2, 3], 4));
// Output: [3, 4, 4, 3]