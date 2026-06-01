//Array is a Linear Data structure which stores multiple value in continuous memory allocation.

let arr = [10, 20, 99, 39, "chale", true];
arr.push(false); //inserts the value to array at last
console.log(arr + " pushed");
arr.unshift(5); //inserts the value to array at first
console.log(arr + " unshifted");
arr.pop(); //delete an element at last
console.log(arr + " popped");
arr.shift(); //delete an element at first
console.log(arr + " shifted");
arr.length; //returns no.s of elements in array

//Array can be accessed by indices
console.log(arr[4]); //returns "chale" which is a value of arr at index 4
//using indices we can assign values to the array
arr[4] = "good bye"; //now array will be [10, 20, 99, 39, "good bye", true]

//but if we assign value at that index which is far from its last valued index then value will be assigned to that indexed and indices between last and assigned one would be got valued as empty.
arr[13] = "i am too far";
console.log(arr); //[ 10, 20, 99, 39, 'good bye', true, <7 empty items>, 'i am too far' ]

//we can assign length to array
let arr2 = new Array(4); //arr2 has length 4 and index upto 3
//Although we have 4 length to the array but still it accepts more than 4 elems
//it means that static array didn't exist in JS

const dynamic = () => {
  let size = Number(prompt("Enter size of array: "));
  let arr = new Array(size);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = prompt("Enter element in array: ");
  }
  console.log(arr);
};
