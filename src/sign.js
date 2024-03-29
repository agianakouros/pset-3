const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;


const number = Number(readlineSync.question("\nEnter a number: "));


if (Number.isNaN(number)) {
    console.log("\nInvalid.")


    } else if (number < MIN || number > MAX) {
      console.log("\nInvalid.\n")
    } else if (number > 0) {
    console.log("\nPositive.\n")
    } else if (number < 0) {
    console.log("\nNegative.\n")
    } else {
    console.log("\nZero.\n")
    }
