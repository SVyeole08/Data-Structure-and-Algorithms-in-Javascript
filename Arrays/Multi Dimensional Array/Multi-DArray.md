# Multi-Dimensional Arrays in JavaScript

## **What is a Multi-Dimensional Array?**
- A multi-dimensional array is an array that contains other arrays as its elements.
- The most common type is a **2D array**, which is essentially an array of arrays.
- Used to represent grids, matrices, and tabular data structures.

---

## **How to Create a 2D Array Statically**

- A **static 2D array** is defined with pre-filled values.

```js
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
```
- Here, `matrix` is a **3x3 static 2D array**.

---

## **How to Create a 2D Array Dynamically**

- A **dynamic 2D array** is created using loops to initialize rows and columns.

```js
let rows = 3, cols = 3;
let matrix = new Array(rows);

for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols).fill(0); // Initializing with 0
}
console.log(matrix);
```

- This code dynamically initializes a **3x3 array** filled with `0`s.

---

## **How to Create a Jagged Array Dynamically**

- A **jagged array** has variable-length sub-arrays.

```js
let jaggedArray = new Array(3);

for (let i = 0; i < jaggedArray.length; i++) {
    jaggedArray[i] = new Array(i + 1).fill(i + 1); // Rows with increasing size
}

console.log(jaggedArray);
```

- The first row has **1 element**, the second row has **2 elements**, and so on.

---

## **One-Liner Code for Creating a 2D Array**

- We can create a **2D array in a single line** using `Array.from()`.

```js
let matrix = Array.from({ length: 3 }, () => new Array(3).fill(0));
console.log(matrix);
```

- This generates a **3x3 matrix** with all elements initialized to `0`.

### Using Nested Loops
```js
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```


# 📘 LeetCode Matrix Problems (Q31–Q34)

---

## Q31. 1572. Matrix Diagonal Sum
🔗 [LeetCode Link](https://leetcode.com/problems/matrix-diagonal-sum/)

### 🧠 Algorithm:
- Loop through each element of the matrix.
- Add the elements where indices are either:
  - On the **primary diagonal** (`i == j`)
  - On the **secondary diagonal** (`i + j == n - 1`)

### ✅ JavaScript Code:
```js
let sum = 0;
for(let i = 0; i < mat.length; i++){
   for(let j = 0; j < mat[i].length; j++){
     if(i == j || i + j == mat.length - 1)
        sum += mat[i][j];
   }
}
return sum;
```

---

## Q32. 867. Transpose Matrix
🔗 [LeetCode Link](https://leetcode.com/problems/transpose-matrix/)

### 🧠 Algorithm:
- Transpose of a matrix means converting rows into columns and columns into rows.
- For a matrix of dimension m x n, the result will be n x m.

### ✅ Java Code:
```java
int m = matrix.length, n = matrix[0].length;
int ans[][] = new int[n][m];

for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
        ans[i][j] = matrix[j][i];
    }
}
return ans;
```

---

## Q33. 48. Rotate Image
🔗 [LeetCode Link](https://leetcode.com/problems/rotate-image/)

### 🧠 Algorithm:
- First, **transpose** the matrix by swapping `matrix[i][j]` with `matrix[j][i]`.
- Then, **reverse** each row.

### ✅ JavaScript Code:
```js
for(let i = 0; i < matrix.length; i++){
    for(let j = i; j < matrix[i].length; j++){
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }
}

for(let i = 0; i < matrix.length; i++){
    let j = 0, k = matrix[i].length - 1;
    while(j < k){
        let temp = matrix[i][j];
        matrix[i][j] = matrix[i][k];
        matrix[i][k] = temp;
        j++;
        k--;
    }
}
```

---

## Q34. 54. Spiral Matrix
🔗 [LeetCode Link](https://leetcode.com/problems/spiral-matrix/)

### 🧠 Algorithm:
- Traverse the matrix in a spiral order: 
  1. Left to Right (top row)
  2. Top to Bottom (right column)
  3. Right to Left (bottom row)
  4. Bottom to Top (left column)
- Keep track of visited boundaries to avoid revisiting.

### ✅ JavaScript Code:
```js
let ans = [];
let minr = 0, minc = 0, maxc = matrix[0].length - 1;
let maxr = matrix.length - 1;
let len = matrix.length * matrix[0].length;

while(ans.length < len){
    // Top wall
    for(let i = minc; i <= maxc && ans.length < len; i++){
        ans.push(matrix[minr][i]);
    }
    minr++;

    // Right wall
    for(let i = minr; i <= maxr && ans.length < len; i++){
        ans.push(matrix[i][maxc]);
    }
    maxc--;

    // Bottom wall
    for(let i = maxc; i >= minc && ans.length < len; i--){
        ans.push(matrix[maxr][i]);
    }
    maxr--;

    // Left wall
    for(let i = maxr; i >= minr && ans.length < len; i--){
        ans.push(matrix[i][minc]);
    }
    minc++;
}

return ans;
```