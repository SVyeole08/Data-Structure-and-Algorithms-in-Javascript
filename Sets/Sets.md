# Set

## Definition

A Set is a built-in collection of uniq values (no duplicates allowed).
Set only accepts distinct values.
Set is unordered.

Example:

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

Q.Jewels and Stones

```js
var numJewelsInStones = function(jewels, stones) {
    let set = new Set()
    for(let i=0;i<jewels.length;i++){
        set.add(jewels.charAt(i))
    }

    let count =0;
    for(let i=0;i<stones.length;i++){
       if(set.has(stones.charAt(i))) count++;
    }

return count
};
```

Q. Happy Number

```js
var isHappy = function(n) {
    let set = new Set()
    while(true){
      let sum =0;
       while(n>0){
        let dig =  n%10;
        sum = sum + (dig*dig);
        n = Math.floor(n/10)
       }
       if(sum == 1)return true;
       if(set.has(sum)) return false
       else set.add(sum)

       n = sum
       
    }
    return false
};
```
