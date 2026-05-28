const prompt = require("prompt-sync")()
let p = Number(prompt("Enter the Principle:-"))
let r = Number(prompt("Enter the Rate of Interest:-"))
let t = Number(prompt("Enter the Period of time:-"))

let a = p*(Math.pow((1+r/100),t));
let i = a - p;

console.log(i)