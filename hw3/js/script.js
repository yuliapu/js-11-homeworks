"use strict";


// Task 1
console.log("1.");

let input = prompt("Enter number value");
if(isNaN(input)) {
        alert("The input was not a number.")
}

console.log("for")
for(let i = 2; i < input; i+=2) {
    console.log(i);
}

console.log("while")
let output = 2;
while(output < input) {
    console.log(output);
    output+=2; 
}

console.log("\n");

// Task 2
console.log("2.");

for(let i = 1; i <= 100; i++) {
    let output = "";
    if(i % 3 == 0){
        output += "Fizz";
    }
    if (i % 5 == 0){
        output += "Buzz";
    }

    output.length == 0 ? console.log(i) : console.log(output);
}


console.log("\n");

// Task 3
console.log("3.");

let inputSequence = "8492640374126512395";
let resultSequence = "";
console.log(inputSequence);
for (let i = 0; i < inputSequence.length; i++)
{
    resultSequence += inputSequence[i] < 5 ? "0" : "1";
}
console.log(resultSequence);