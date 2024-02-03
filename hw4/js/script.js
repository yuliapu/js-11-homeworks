"use strict";

// 1
console.log(1);

const currentMaxValue = 4589;
let reversedDigits = currentMaxValue.toString().split("").reverse();
let reversedNumber = Number(reversedDigits.join(""));

console.log(reversedNumber); 
console.log(typeof reversedNumber); 


// 2
console.log(2);

const resultsArray = [1, 2, [3, [4]]];
let flatArray = resultsArray.flat(Infinity);
let productOfArray = 1;

for (let item of flatArray)
{
    productOfArray *= item;
}

console.log(productOfArray);
