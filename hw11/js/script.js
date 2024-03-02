"use strict";

// 1. Напишіть функцію яка буде використовуватись для сортування масиву фільмів
// Функція буде приймати два аргумента:
// властивість за якою треба посортуватиопцію напрямку сортування (зростання чи спадання)

const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

console.log(movies.sort(byProperty('releaseYear', '>'))); 
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '>'))); 
// виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
  return (a, b) =>{
    let order = a[property] > b[property] ? 1 : -1;
    if (direction === ">") {
      order = -order;
    }
    return order;
  }
}


// 2. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.

function barkFunction(count){
  let bark = "Bark";
  let intervalId = setInterval(() => {
    if (count == 0){
      clearInterval(intervalId);
    }
    else {
      count--;
      bark += "!";
      console.log(bark);
    }
  }, 1000);
}

function slower(func, seconds) {
  console.log(`Chill out, you will get you result in ${seconds} seconds`);
  return function (...args) {
     return setTimeout(() => func(...args), seconds * 1000); 
  }
}

let slowedBarkFunction = slower(barkFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор і задає значення вповільнення
barkFunction(2);
slowedBarkFunction(5); // викликаєте декоратор

// виведе в консоль "Chill out, you will get you result in 5 seconds
//...через 5 секунд виведе результат роботи 'someFunction'