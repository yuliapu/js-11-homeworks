"use strict";

console.log("3.");

let volume = prompt(`Task 3\nPlease enter petrol volume (L).`);
let price = prompt(`Task 3\nPlease enter petrol price (UAH/L).`);
let total = Math.ceil(volume * price * 100) / 100;

console.log("Volume: ", volume, "L");
console.log("Price: ", price, "UAH/L");
console.log("Total: ", total, "UAH");