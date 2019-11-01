const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;


console.log("\nEnter three numbers.");

const a = Number(readlineSync.question("\n"));
const b = Number(readlineSync.question(""));
const c = Number(readlineSync.question(""));


if (Number.isNaN(a)) {
    console.log("\nInvalid.")
  } else if (a < MIN || a > MAX) {
    console.log("\nInvalid.")
  } if (Number.isNaN(b)) {
    console.log("\nInvalid.")
  } else if (b < MIN || b > MAX) {
    console.log("\nInvalid.")
  } if (Number.isNaN(c)) {
    console.log("\nInvalid.")
  } else if (c < MIN || c > MAX) {
    console.log("\nInvalid.")
  }

  
