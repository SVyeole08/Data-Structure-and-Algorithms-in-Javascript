# Searching Questions

## 📍 Search Insert Position

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

## 🔢 First and Last Position of Element in Sorted Array

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

## 📊 Count of an Element in a Sorted Array

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

## 🏔️ Peak Index in Mountain Array

**Definition:**
A mountain array first increases and then decreases. The peak index is the index of the maximum element.

**Approach:**

* Use Binary Search.
* If `arr[mid] < arr[mid + 1]`, move right.
* Otherwise, move left.
* Stop when `start == end`.

**Time Complexity:** `O(log n)`

---

## 🔄 Search in Rotated Sorted Array

**Definition:**
Find a target element in a rotated sorted array in `O(log n)` time.

**Key Idea:**
At least one half of the array is always sorted.

**Approach:**

* Find `mid`.
* Check which half is sorted.
* Determine whether the target lies in that half.
* Eliminate the other half.

**Time Complexity:** `O(log n)`

---

## 📚 Book Allocation Problem

**Definition:**
Allocate books among students such that:

* Every student gets at least one book.
* Allocation is contiguous.
* Maximum pages assigned to a student is minimized.

### Binary Search on Answer - Problem 3

#### Search Space (Problem 3)

```text
start = max(books)
end = sum(books)
```

#### Validation (Problem 3)

For a given `mid`:

```text
mid = maximum pages allowed per student
```

Count students required.

* If students ≤ k → Valid
* Else → Invalid

**Time Complexity:** `O(n log(sum))`

---

## 📦 Capacity to Ship Packages Within D Days

**Definition:**
Find the minimum ship capacity needed to deliver all packages within `D` days.

### Binary Search on Answer - Problem 4

#### Search Space (Problem 4)

```text
start = max(weights)
end = sum(weights)
```

#### Validation (Problem 4)

```text
mid = ship capacity
```

Simulate shipping:

* If capacity exceeded → new day.
* Count total days required.

If:

```text
days <= D
```

Capacity is valid.

---

## 🍌 Koko Eating Bananas

**Definition:**
Koko eats `k` bananas per hour.

Find the minimum eating speed required to finish all piles within `h` hours.

### Binary Search on Answer - Problem 5

#### Search Space (Problem 5)

```text
start = 1
end = max(piles)
```

#### Validation (Problem 5)

For a speed:

```js
hours += Math.ceil(pile / speed)
```

If:

```text
hours <= h
```

Speed is valid.

---

## 🎯 Binary Search on Answer Pattern

Many optimization problems follow:

```text
NO NO NO NO YES YES YES
```

Steps:

1. Identify the answer range.
2. Binary search on the answer.
3. Write an `isValid(mid)` function.
4. If valid → search left.
5. Else → search right.

---

## 💡 Main Learning

Binary Search is not only for searching elements.

It can also be used to find the minimum or maximum valid answer by defining a search space and a validation function.
