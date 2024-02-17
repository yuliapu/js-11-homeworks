"use strict";

//1.  Напишіть функцію addThemAll
//Вона буде знаходити суму усіх своїх аргументів незалежно від їх кількості (але без використання вбудованого об'єкту Math).
//Використайте оператор розширення

console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function addThemAll(...args){
  let copy = [...args];
  return copy.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}


//2. Задача на використання замикання. 
//Напишіть функцію яка працює таким чином: multiply(a)(b)  

console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	        // -4
console.log(multiply(4)(3))		// 12

function multiply(a) {
	return function (b) {
    return a * b;
  };
}