# Sorting Algorithms

## Merge Sort

### Given

```js
let arr = [10,7,8,2,19,69,45,8]
divide(arr , 0 , arr.length-1)
console.log(arr);
```

### 🔧 1. `divide(arr, f, l)`

```js
function divide(arr , f , l){
    if(f >= l) return; // base case, 1 element
    let mid = Math.floor((f + l) / 2); // find mid
    divide(arr , f , mid); // sort left half
    divide(arr , mid+1 , l); // sort right half
    conquer(arr , f , mid , l); // merge two halves
}
```

* **Splits** the array recursively.
* Works like **binary tree** division until base case (1 element).
* Then calls `conquer` to merge sorted parts.

---

### 🧠 2. `conquer(arr, f, m, l)`

```js
function conquer(arr , f , m , l){
    let temp = new Array(l - f + 1).fill(0);
    let i = f, j = m+1, k = 0;

    // Compare and fill the temp array
    while(i <= m && j <= l){
        if(arr[i] < arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }

    // Copy remaining elements from left half
    while(i <= m){
        temp[k++] = arr[i++];
    }

    // Copy remaining elements from right half
    while(j <= l){
        temp[k++] = arr[j++];
    }

    // Copy sorted temp back to original array
    i = f;
    k = 0;
    while(k < temp.length){
        arr[i++] = temp[k++];
    }
}
```

#### 🔍 Summary

* Merges two sorted halves \[f...m] and \[m+1...l].
* Uses extra `temp[]` to hold merged values.
* Time: **O(n log n)** overall
* Space: **O(n)** due to temp array (not in-place)

---

## 🔚 Conclusion

| Problem          | Time Complexity | Space Complexity | Notes                         |
| ---------------- | --------------- | ---------------- | ----------------------------- |
| 3Sum (Brute)     | O(n³)           | O(n)             | Uses Set                      |
| 3Sum (Optimized) | O(n²)           | O(1)             | Uses sort + 2-pointer         |
| Merge Sort       | O(n log n)      | O(n)             | Recursive, divide-and-conquer |

## Quick Sort

### Definition

Quick Sort is a Divide and Conquer algorithm that sorts an array by selecting a pivot element, partitioning the remaining elements around it, and recursively sorting the resulting subarrays.

#### Key Idea

1. Choose a pivot.
2. Place all smaller elements to the left of the pivot.
3. Place all larger elements to the right of the pivot.
4. Recursively sort both halves.

#### Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Best    | O(n log n) |
| Average | O(n log n) |
| Worst   | O(n²)      |

#### Space Complexity

| Complexity                 |
| -------------------------- |
| O(log n) (recursive stack) |

#### Use Cases

* Large datasets
* General-purpose sorting
* In-place sorting when memory is limited
* System-level sorting implementations

#### Important Note

Quick Sort is **not stable** because equal elements may change their relative order.

---

## Cyclic Sort

### Overview

Cyclic Sort is an index-based sorting algorithm designed for arrays containing numbers from **1 to n** without duplicates.

### Key Idea (Cyclic)

Each element is placed directly at its correct index:

```text
value x → index x - 1
```

### Time Complexity (Cyclic)

| Complexity |
| ---------- |
| O(n)       |

### Space Complexity (Cyclic)

| Complexity |
| ---------- |
| O(1)       |

### Use Cases (Cyclic)

* Finding missing numbers
* Finding duplicate numbers
* Finding corrupted pairs
* Arrays containing numbers from 1 to n

### Important Note (Cyclic)

Cyclic Sort is **not stable** because elements are swapped directly into position.

---

## Interview Questions

**Q. What is the time complexity of Cyclic Sort?**

**Answer:**

* Time: O(n)
* Space: O(1)

**Q. Is Cyclic Sort stable?**

**Answer:**
No, Cyclic Sort is not stable.

**Q. Why is Cyclic Sort efficient for arrays containing numbers from 1 to n?**

**Answer:**
Because each number can be placed directly at its correct index using the relation:

```js
correctIndex = arr[i] - 1
```

This minimizes unnecessary comparisons and avoids recursion.

---
