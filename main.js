const util = require("./myUtils.js");

const reader = require("readline-sync");

const num1 = reader.question('Input a positive integer. ');
const num2 = reader.question('Input another positive integer. ');

if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {

    console.log("At least one of your inputs is not a positive integer.");
}


const range = [];

for (let i = Math.min(num1,num2); i <= Math.max(num1,num2); i++) {

   if(util.isPrime(i)) range.push(i);
}
util.print(range);
