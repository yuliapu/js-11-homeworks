"use strict";

// 1
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
  };
  
  let updatedPriceData = {};

  for (let key in priceData){
    let lowerCaseKey = key.toLowerCase();
    let price = Number(priceData[key]);

    updatedPriceData[lowerCaseKey] = price.toFixed(2);
  }

  console.log(updatedPriceData) 
  