const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;


const integer = Number(readlineSync.question("\nEnter an integer: "));

const remainder = integer % 2;

if (Number.isNaN(integer)) {
    console.log("\nInvalid.\n")


  } else if (integer < MIN || integer > MAX) {
    console.log("\nInvalid.\n")
  } else if (remainder > 0) {
      console.log("\nOdd.\n")
  } else {
      console.log("\nEven.\n")
  }
