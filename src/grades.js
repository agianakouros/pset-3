const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = 100;

const grade = Number(readlineSync.question("\nEnter a grade: "));

    if (Number.isNaN(grade)) {
    console.log("\nInvalid.\n")
  } else if (grade < MIN || grade > MAX) {
    console.log("\nInvalid.\n")
  } else if (grade >= 90 && grade <= 100) {
    console.log("\nYou recieved an A.\n")
  } else if (grade >= 80 && grade <= 89) {
    console.log("\nYou recieved a B.\n")
  } else if (grade >= 70 && grade <= 79) {
    console.log("\nYou recieved a C.\n")
  } else if (grade >= 65 && grade <= 69) {
    console.log("\nYou recieved a D.\n")
  } else if (grade >= 0 && grade <= 64) {
    console.log("\nYou recieved an F.\n")
  }
