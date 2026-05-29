const prompt = require("prompt-sync")();

//Math functions:
console.log(Math.ceil(10.2)); //Returns one higher of number only when digit after decimal is greater than 0
console.log(Math.floor(20.4)); //Returns one lower of number only when digit after decimal is greater than 0
console.log(Math.round(10.5)); //Rounds off the number
console.log(Math.abs(-11.34)); //Always makes -ve number positive
console.log(Math.trunc(10.23987509234238974)); //did not return numbers after decimal
console.log(Math.pow(5, 2)); //5^2
console.log(Math.sqrt(729)); //square root
console.log(Math.cbrt(729)); //Cube root
console.log(Math.max(10, 3, 345, 236, 234123, 23)); //Returns Maximum among the params
console.log(Math.min(10, 3, 345, 236, 234123, 23)); //Returns Minimum among the params
console.log(Math.random()); //Returns random number between 0 to 1

let a = 23.234235243;
console.log(a.toFixed(2)); //Returns only count of number after decimal which is provided as param to toFixed

/* Loop */
//For loop
/*
for loop runs till the fixed number of loop.

for(initialization,condition,change){
    //logic
}
*/

//break and continue
// whenever break got read in any loop at that moment it throws us out of the loop
// whenever continue got read in any loop at that mement it skips the current value and returns next one

//While loop
/*
while is type of loop which runs the loop till the condition becomes false

initialization;
while(condition){
    change
}
*/

//do-while loop
/*
in do-while loop the code in do run once without any blockage but to run the code in do again condition of while must be true.

let i = 1;
do{
    --
}while(condition);
*/ 

//Switch case
/*
n is input
switch (n) {
  case 1:
    {
    }
    break;
  case 2:
    {
    }
    break;
  default:
    {
    }
}
*/
