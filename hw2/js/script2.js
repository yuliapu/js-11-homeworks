"use strict";

console.log("2.");

const rate = 37.87;
let uah = prompt(`Task 2\n1 United States Dollar equals ${rate} Ukrainian hryvnia.\nPlease enter convertion amount (UAH).`);

console.log(`1 United States Dollar equals ${rate} Ukrainian hryvnia.`);
console.log(`Input: ${uah} UAH`);

let dollars = Math.floor(uah / rate * 100) / 100;

console.log("Result: ", dollars, "USD");