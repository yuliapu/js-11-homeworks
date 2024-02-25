"use strict";

//1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval  
//Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'

detonatorTimer(3);

function detonatorTimer(delay) {
	let intervalId = setInterval(() => {
    if (delay == 0){
      console.log("BOOM!")
      clearInterval(intervalId);
    }
    else {
      console.log(delay--);
    }
  }, 1000);	
}



//2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout  
//Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'

detonatorTimerWithSetTimeout(3);

function detonatorTimerWithSetTimeout(delay) {
	let timerId = setTimeout(function detonator() {
    if (delay > 0){
    console.log(delay--);
    setTimeout(detonator, 1000)
  }
    else {
      console.log("BOOM!")
    }
  }, 1000)
}



//3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять. 

let tram = {
	origin: 'Czech Republic',
	name: 'Tatra T3',
	yearOfBirth: '1966',
	line: 19,
	city: 'Kyiv',
  fromStation: 'Kontraktova ploshcha Metro Station',
  toStation: 'Tarasa Shevchenka Square',
  isActive: false,
  weightNumber: 16000,
  weightUnit: 'kg',
  speedNumber: 65,
  speedUnit: 'km/h',
	introduce() {
		console.log(`I am ${this.name} tramcar. I was manufactured in ${this.origin} in year ${this.yearOfBirth}.`);
	},
	describeLine() {
		console.log(`I ` + (this.isActive ?  `operate` : `operated`) + 
    ` on the line ${this.line} from ${this.fromStation} to ${this.toStation} in the city of ${this.city}.`);
	},
  describeSpecifications(){
    console.log(`My maximum speed is ${this.speedNumber}${this.speedUnit}.`);
    console.log(`My weight is ${this.weightNumber}${this.weightUnit}.`);
  },
	describeCurrentState() {
    if (this.isActive){
      console.log(`I am very happy to operate in ${this.city}.`);
    }
    else{
      console.log(`I am very sad that I'm currently not needed in ${this.city}.`);
    }
	},
}

tram.introduce();
tram.describeLine();
tram.describeSpecifications();
tram.describeCurrentState();



//4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту
//Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:

let securedSelfIntroduce = tram.introduce.bind(tram);
let securedSelfDescribedLine = tram.describeLine.bind(tram);
let securedSelfDescribedSpecifications = tram.describeSpecifications.bind(tram);
let securedSelfDescribeCurrentState = tram.describeCurrentState.bind(tram);

setTimeout(securedSelfIntroduce, 5000); 
setTimeout(securedSelfDescribedLine, 6000); 
setTimeout(securedSelfDescribedSpecifications, 7000); 
setTimeout(securedSelfDescribeCurrentState, 8000);