"use strict";

let switchButton = document.querySelector('button');
let body = document.querySelector('body');
let lastUpdatedTime = document.querySelector('p');

const turnOffText = "Turn off";
const turnOnText = "Turn on";
const onStateColor = "LightYellow";
const offStateColor = "MidnightBlue";
const themeKey = "theme";
const lastUpdateKey = "lastUpdate";

let lastUpdatedStoredDateTime = localStorage.getItem(lastUpdateKey);
let theme = localStorage.getItem(themeKey);

if (theme !== null){
    if (theme == turnOffText){
        setTurnOffStylesAndText(lastUpdatedStoredDateTime);
    }
    else{
        setTurnOnStylesAndText(lastUpdatedStoredDateTime);
    }
}

switchButton.addEventListener("click", () => {
    let lastUpdatedDateTime = new Date(Date.now());
    localStorage.setItem(lastUpdateKey, lastUpdatedDateTime.toString());
    if(switchButton.textContent === turnOffText){
        setTurnOffStylesAndText(lastUpdatedDateTime);
    }
    else {
        setTurnOnStylesAndText(lastUpdatedDateTime);
    }
});

function setTurnedOnStyles(){
    body.style.backgroundColor = onStateColor;
    lastUpdatedTime.style.color = offStateColor;
    switchButton.textContent = turnOffText;
}

function setTurnedOffStyles(){
    body.style.backgroundColor = offStateColor;
    lastUpdatedTime.style.color = onStateColor;
    switchButton.textContent = turnOnText;
}

function getLastUpdateTime(datetimeInput, state){
    const format = (input) => `${('0' + input).slice(-2)}`;
    let datetime = new Date(datetimeInput);
    let formattedDateTime = `${format(datetime.getDate())}-`+
                             `${format(datetime.getMonth())}-`+
                             `${datetime.getFullYear()} `+
                             `${format(datetime.getHours())}:${format(datetime.getMinutes())}:${format(datetime.getSeconds())}`;
    
    return formattedDateTime;
}

function setTurnOnStylesAndText(datetimeInput){
    localStorage.setItem(themeKey, turnOnText);
    setTurnedOnStyles();
    lastUpdatedTime.textContent = `Last ${turnOnText.toLowerCase()}: ${getLastUpdateTime(datetimeInput, turnOnText)}`;
}

function setTurnOffStylesAndText(datetimeInput){
    localStorage.setItem(themeKey, turnOffText);
    setTurnedOffStyles();
    lastUpdatedTime.textContent = `Last ${turnOffText.toLowerCase()}: ${getLastUpdateTime(datetimeInput, turnOnText)}`;
}