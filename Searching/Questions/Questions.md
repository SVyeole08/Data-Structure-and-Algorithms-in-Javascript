# Searching Questions

## Search Insert Position

### 🧠 Problem

Given a **sorted** array and a target value, return the **index if found**, or the **index where it should be inserted** to maintain the order.

---

### 🔍 Algorithm

1. Use **binary search** on the array.
2. Maintain `start` and `end` pointers.
3. On each step:

   * Calculate `mid = Math.floor((start + end) / 2)`
   * If `target == nums[mid]`, return `mid`
   * If `target < nums[mid]`, move left → `end = mid - 1`
   * If `target > nums[mid]`, move right → `start = mid + 1`
4. If not found, the insert position is at `start`.

### Code

```javascript
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    // If target not found, return insert position
    return start;
};
```

---

## First and Last Position of Element in Sorted Array

### 🧠 Problem with Finding Range

Find the **first and last index** of a given target in a sorted array.

---

### 🔍 Algorithm for Finding Range

1. Perform two binary searches:

   * One to find the **first occurrence**
   * Another to find the **last occurrence**
2. In both, adjust the binary search conditions slightly:

   * For first: search left even when target is found.
   * For last: search right even when target is found.

### Code for Finding Range

```javascript
function searchRange(nums, target) {
    return [findIndex(nums, target, true), findIndex(nums, target, false)];
}

function findIndex(nums, target, findFirst) {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            index = mid;
            if (findFirst) {
                end = mid - 1; // keep searching left
            } else {
                start = mid + 1; // keep searching right
            }
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return index;
}
```

---

## Count of an Element in a Sorted Array

### 🧠 Problem with Counting

Given a sorted array and a target, find **how many times the target appears**.

---

### 🔍 Algorithm for Counting

1. Use the **same logic** as Q99 to find:

   * `firstIndex` of the target
   * `lastIndex` of the target
2. If either index is `-1`, the target doesn't exist.
3. Else, return `(lastIndex - firstIndex + 1)`

### Code for Counting

```javascript
function countOccurrences(nums, target) {
    const first = findIndex(nums, target, true);
    if (first === -1) return 0; // not found

    const last = findIndex(nums, target, false);
    return last - first + 1;
}

function findIndex(nums, target, findFirst) {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            index = mid;
            if (findFirst) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return index;
}
```

---
