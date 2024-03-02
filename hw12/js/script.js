"use strict";

// Задача на селектори
// Для сторінки напишіть селектори для наступних елементів:
// для елементу з текстом 'Навігація по DOM дереву'
// для першого елементу <section>
// для елементу списку з текстом 'Пункт 5'
// для елементу з класом 'hatredLevelBlock'

 let navigationByDomElement = document.querySelector('#headerTwo');
 console.log(navigationByDomElement);

 let firstElementFromSection = document.querySelector('section').children[0];
 console.log(firstElementFromSection);
 
 let listElement5;
 document.querySelectorAll('li').forEach((el) => {
  if (el.innerText === "Пункт 5"){
    listElement5 = el;
  }
 });
 console.log(listElement5);

 let hatredLevelBlockElement = document.querySelector('.hatredLevelBlock')
 console.log(hatredLevelBlockElement);