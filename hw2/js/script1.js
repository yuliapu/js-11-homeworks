"use strict";

console.log("1.")

let volatileThingy = undefined;
let volatileNumber = 78.39271;
let volatileString = "Text";
let volatileBoolean = false;

console.log("volatileThingy:", volatileThingy,
    "\nvolatileNumber:", volatileNumber,
    "\nvolatileString:", volatileString,
    "\nvolatileBoolean:", volatileBoolean);

console.log("String: \n\t", String(volatileThingy), volatileNumber + "", volatileNumber.toString());
console.log("Number: \n\t", Number(volatileThingy), +volatileNumber, parseInt(volatileBoolean), Number(volatileBoolean), Number(volatileString));
console.log("Number (parseInt): \n\t", parseInt(volatileThingy), parseInt(volatileBoolean), parseInt(volatileString));
console.log("Boolean: \n\t", Boolean(volatileThingy), !!volatileNumber, !!volatileString);