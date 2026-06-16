# Missing Number

```javascript
var missingNumber = function(nums) {
    let i = 0;

    // Loop through all elements
    while (i < nums.length) {
        let correct = nums[i]; 
        // Each number should be at index equal to its value

        if (nums[i] < nums.length && nums[i] !== nums[correct]) {
            // Only swap if the number is within the range [0, n-1] and not in the correct place

            let temp = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp;
            // Swap current element to its correct index
        } else {
            i++;
            // If it's already in the right place or out of range, move to next index
        }
    }

    // Now check which index doesn't have the correct number
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
            // This index should contain the number i, but it doesn't — so i is the missing number
        }
    }

    return nums.length;
    // If all numbers from 0 to n-1 are in place, then missing number is n
};
```

---

## 👻 Find All Numbers Disappeared in an Array

```javascript
var findDisappearedNumbers = function(nums) {
    let i = 0;

    // Sort numbers so that each x is at index x-1
    while (i < nums.length) {
        let correct = nums[i] - 1;
        // The correct index for nums[i] is nums[i] - 1

        if (nums[i] !== nums[correct]) {
            // If it's not at the correct position, swap it

            let temp = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp;
        } else {
            i++;
            // If it’s already in the right spot, just move to the next element
        }
    }

    // After cyclic sort, check for mismatches
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            result.push(i + 1);
            // Index i should have value i+1; if not, that number is missing
        }
    }

    return result;
};
```

---

## ⭐ First Missing Positive

```javascript
var firstMissingPositive = function(nums) {
    let i = 0;

    // Goal: put each positive number x at index x - 1
    while (i < nums.length) {
        let correct = nums[i] - 1;

        // Only swap if number is in range [1, n] and not already at its correct index
        if (
            nums[i] > 0 &&
            nums[i] <= nums.length &&
            nums[i] !== nums[correct]
        ) {
            let temp = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp;
        } else {
            i++;
            // Skip invalid or already placed numbers
        }
    }

    // After placing, find the first index i where nums[i] !== i + 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
            // i + 1 is the first missing positive number
        }
    }

    return nums.length + 1;
    // If all 1 to n are present, return n + 1
};
```

---

## 📌 Key Cyclic Sort Logic

```js
while (i < nums.length) {
    let correct = index where nums[i] should be;

    if (nums[i] is valid and not at correct index) {
        swap(nums[i], nums[correct])
    } else {
        i++;
    }
}
```
