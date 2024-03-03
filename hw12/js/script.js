"use strict";

// Задача на селектори
// Для сторінки напишіть селектори для наступних елементів:
// для елементу з текстом 'Навігація по DOM дереву'
// для першого елементу <section>
// для елементу списку з текстом 'Пункт 5'
// для елементу з класом 'hatredLevelBlock'

 let navigationByDomElement = document.querySelector('#headerTwo');
 console.log(navigationByDomElement);

 let firstElementFromSection = document.querySelector('section');
 console.log(firstElementFromSection);
 
 let listElement51 = document.querySelector('ul').children[4];
 let listElement52 = document.querySelector('li:nth-of-type(5)');
 let listElement53 = document.querySelector('li:nth-child(5)');
 let listElement54 = document.querySelectorAll('li')[4];
 console.log(listElement51);
 console.log(listElement52);
 console.log(listElement53);
 console.log(listElement54);

 let hatredLevelBlockElement = document.querySelector('.hatredLevelBlock')
 console.log(hatredLevelBlockElement);