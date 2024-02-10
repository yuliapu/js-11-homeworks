"use strict";

// 1
// Напишіть функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.


function iterativeOddSumTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 2){
    sum += i;
}

return sum;
};

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(9)) // 25
console.log(iterativeOddSumTo(10)) // 25



// 2. Задача про рекурсію 

// Напишіть функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.

function recursiveOddSumTo(number) {

  if (number < 0)
    return 0;

  if (number % 2 == 0) 
    number--;

  return (number + recursiveOddSumTo(number-2))
};

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(9)) // 25
console.log(recursiveOddSumTo(10)) // 25


// 3. Додаткова задача*

// Напишіть стрілочну функцію isXOEqual яка перевіряє чи рядок має однакову кількість символів «x» та «o». 
// Функція повинна повертати логічне значення та бути нечутливою до регістру. Рядок може містити будь-які символи.

const isXOEqual = (str) => {
    
  let xCount = 0;
  let oCount = 0;

  for (let char of str.toLowerCase()){
    if (char === 'o'){
      oCount++;
    }
    else if (char == 'x'){
      xCount++;
    }
  }

  return oCount === xCount;
}

console.log(isXOEqual("ooxx")) // true
console.log(isXOEqual("xooxx")) // false
console.log(isXOEqual("ooxXm")) // true
console.log(isXOEqual("zpzpzpp")) // коли немає 'x' та 'o' то має повертати true бо 0 = 0
console.log(isXOEqual("zzoo")) // false
