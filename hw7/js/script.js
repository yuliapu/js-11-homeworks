"use strict";

// 1. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності
// Для рішення задачі необхідно використовувати тільки методи масивів

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray
  .flat(Infinity)
  .reduce((product, currentValue) => product * currentValue, 1);

console.log(productOfArray); // 24


// 2. Задача про перетворення об'єкту
// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одним словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.
// Для рішення задачі необхідно використовувати методи масивів та Object.entries/Object.fromEnties методи 

// приклад об'єкту
const priceData = {
Apples: '23.4',
BANANAS: '48',
oRAngGEs: '48.7584',
};

function optimizer(data) {
	let entries = Object.entries(data);
  entries = entries.map(entry => [entry[0].toLowerCase(), Number(entry[1]).toFixed(2)]);
  return Object.fromEntries(entries);
};

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}


// 3. Задача на фільтрування масиву
// Реалізуйте фільтрування імен які починаються з голосної двома способами:
// через умовну конструкцію всередині методу перебора
// через вбудований метод масивів для фільтрації
// Рішення має працювати незалежно від конкретних значень в масиві імен

const names = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const vowels = ['а', 'е', 'и', 'і', 'о', 'у', 'я', 'ю', 'є', 'ї'];
let filteredNames = [];

for (let name of names){
  if (vowels.some(vowel => name.toLowerCase().startsWith(vowel)))
    filteredNames.push(name);
}

console.log(names.filter(name => vowels.includes(name[0].toLowerCase())));
console.log(filteredNames); 


// 4. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку
// Рішення має працювати незалежно від конкретних значень в масиві імен

const fullNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

let initials = fullNames.map(fullname => fullname.split(' ').map(name => name[0]));
initials = initials.map(initial => initial.join('.')).sort();


console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


// 5. Додаткова задача*
// Напишіть функцію sortArray яка буде коректно сортувати масив чисел по зростанню. 
// Якщо функція приймає порожній масив, значення null або undefined, вона має повернути порожній масив.

function sortArray(arr) {
	if(!Array.isArray(arr) || arr.length < 1){
    return []
  }

  return arr.slice().sort((a, b) => a - b);
}

console.log(sortArray([1, 12, 10, 50, 5])); // поверне [1,5,10,12,50]
console.log(sortArray(null)); // поверне []
  