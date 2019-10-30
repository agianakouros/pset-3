const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const QUARTER = 25;
const DIME = 10;
const NICKEL = 5;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid")
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid")
} else {

let whole = (amount * 100);

let numOfQuarters = Math.floor(whole / QUARTER);
let change1 = (whole % QUARTER);

let numOfDimes = Math.floor(change1 / DIME);
let change2 = (change1 % DIME);

let numOfNickels = Math.floor(change2 / NICKEL);
let change3 = (change2 % NICKEL);

console.log("\n" + numOfQuarters +  " quarters, " + numOfDimes + " dimes, " + numOfNickels + " nickels, and " + change3 + " pennies.");
}
