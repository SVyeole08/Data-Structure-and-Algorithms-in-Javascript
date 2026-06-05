## Set

### Definition:
A Set is a built-in collection of unique values (no duplicates allowed).
Set only accepts distinct values.
Set is unordered.

Exmaple:
```js
let set = new Set();

// Adding elements
set.add(1);
set.add(2);
set.add(3);
set.add(2);  // Duplicate, will be ignored

console.log("Set after adding:", set);  // Set {1, 2, 3}

// Checking existence
console.log(set.has(2));  // true
console.log(set.has(5));  // false

// Deleting an element
set.delete(2);
console.log("After deletion:", set);  // Set {1, 3}

// Looping through the Set
for (let item of set) {
    console.log("Element:", item);
}

// Size of the Set
console.log("Total Elements:", set.size);  // 2

// Clearing all elements
set.clear();
console.log("After clear:", set);  // Set {}
```