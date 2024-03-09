"use strict";

let switchButton = document.querySelector('button');
let html = document.querySelector('html');
let lastUpdatedTime = document.querySelector('p');

const turnOffText = "Turn off";
const turnOnText = "Turn on";
const onStateColor = "LightYellow";
const offStateColor = "MidnightBlue";

let lastUpdatedStoredText = localStorage.getItem("lastUpdateText");
if (lastUpdatedStoredText !== null){
    lastUpdatedTime.textContent = lastUpdatedStoredText;
    if (lastUpdatedStoredText.includes(turnOffText.toLowerCase())){
        setTurnedOffStyles();
    }
    else{
        setTurnedOnStyles();
    }
}

switchButton.addEventListener("click", () =>{
    if(switchButton.textContent === turnOffText){
        setTurnedOffStyles();
        localStorage.setItem("lastUpdateText", getLastUpdateTime(Date.now(), turnOffText));
        lastUpdatedTime.textContent = localStorage.getItem("lastUpdateText");
    }
    else {
        setTurnedOnStyles();
        localStorage.setItem("lastUpdateText", getLastUpdateTime(Date.now(), turnOnText));
        lastUpdatedTime.textContent = localStorage.getItem("lastUpdateText");
    }
});

function setTurnedOnStyles(){
    html.style.backgroundColor = onStateColor;
    lastUpdatedTime.style.color = offStateColor;
    switchButton.textContent = turnOffText;
}

function setTurnedOffStyles(){
    html.style.backgroundColor = offStateColor;
    lastUpdatedTime.style.color = onStateColor;
    switchButton.textContent = turnOnText;
}

function getLastUpdateTime(datetimeInput, state){
    let datetime = new Date(datetimeInput);
    let formattedDateTime = `${datetime.getDate()}-${datetime.getMonth()}-${datetime.getFullYear()} 
    ${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
    
    return`Last ${state.toString().toLowerCase()}: ${formattedDateTime}`;
}