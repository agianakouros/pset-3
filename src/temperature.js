const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const temp = Number(readlineSync.question("\nEnter a temperature: "));
let scale = readlineSync.question("Enter a scale: ").toLowerCase();


    if (Number.isNaN(temp)) {
    console.log("\nInvalid.\n")
  } else if (temp > MAX || temp < MIN) {
    console.log("\nInvalid.\n")
  } else if (scale !== "f" && scale !== "c" && scale !== "k") {
    console.log("\nInvalid.\n")
  }


  else {

if (scale === "f") {
      if (temp >= 212) {
      console.log("\nGas.\n")
    } else if (temp > 32 && temp < 212) {
      console.log("\nLiquid.\n")
    } else if ( temp <= 32) {
      console.log("\nSolid.\n")
    } }

if (scale === "c") {
    if (temp > 100) {
    console.log("\nGas.\n")
  } else if (temp > 0 && temp <= 100) {
    console.log("\nLiquid.\n")
  } else if ( temp <= 0) {
    console.log("\nSolid.\n")
  } }

if (scale === "k") {
    if (temp >= 373.15) {
    console.log("\nGas.\n")
  } else if (temp > 273.15 && temp < 373.15) {
    console.log("\nLiquid.\n")
  } else if ( temp <= 273.15) {
    console.log("\nSolid.\n")
  }
}
}
