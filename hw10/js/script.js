"use strict";

// 1. Задача про обчислення різниці часу
// Напишіть функцію яка буде буде приймати 3 параметри
// — початкову дату (string)
// — кінцеву дату (string)
// — розмірність ('days',  'hours', 'minutes', 'seconds')
// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.
// Приклади:

durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'); // поверне '86400 seconds'
durationBetweenDates("31 Jan 2022", "03 Feb 2021", "days"); // поверне '362 days'

function durationBetweenDates(startDate, endDate, unit) {
  let convertionMap = new Map([["days", 24 * 60 * 60],["hours", 60 * 60],["minutes", 60],["seconds", 1]]);
  let startTimestamp = new Date(startDate).getTime();
  let endTimestamp = new Date(endDate).getTime();

  let duration = (endTimestamp - startTimestamp) / 1000;
  duration = Math.abs(duration / convertionMap.get(unit));
  console.log(`${duration} ${unit}`);
}


// 2. Масив унікальних значень
//  Напишіть функцію яка відфільтрує масив унікальних значень
//  Рішення має працювати незалежно від конкретних значень в масиві імен

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
  let set = new Set(array);
  for (let element of set){
    console.log(element);
  }
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];