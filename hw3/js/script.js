"use strict";


// Task 1
console.log("1.");

let input;
do {
    input = prompt("Enter number value");
    if(isNaN(input)) {
        alert("Try again.")
    }
} while (isNaN(input));

console.log("for")
for(let i = 2; i < input; i+=2) {
    console.log(i);
}

console.log("while")
if(input % 2 == 1) input--;
while(input > 2) {
    console.log(input);
    input-=2; 
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
    if (inputSequence[i] < 5){
        resultSequence += "0";
        continue;
    }
    
    resultSequence += "1";
}
console.log(resultSequence);