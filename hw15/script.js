"use strict";

// чотири класи для створення об'єктів-сутностей (це можуть бути тварини, покемони, раси і т.д. - проявіть фантазію)
// у кожного класу має бути мінімум 3 властивості та мінімум 3 методи(але можна й більше)
// у кожного класу має бути своя унікальна властивість
// у кожного класу має бути приватна властивість
// у двох класів має бути спільний предок та спільний метод характерний тільки для них 
// (наприклад Animal -> Pet -> Dog та Animal -> Pet -> Cat - в даному випадку Dog та Cat мають спільного предка)

class Lamp{
    constructor(type, energyConsumption, initialCapacity){
        this.type = type;
        this.energyConsumption = energyConsumption;
        this.initialCapacity = initialCapacity;
        this.#limit = initialCapacity;
    }

    #limit;
    #isActive = false;

    turnOn(){
        if (!this.#isActive){
            console.log("Light is ON");
            this.#limit--;
            this.#isActive = true;
        }
    }

    turnOff(){
        console.log("Light is OFF");
        this.#isActive = false;
    }

    replace(){
        this.#isActive = false;
        this.#limit = this.initialCapacity;
    }
}

class WifiLamp extends Lamp{
    constructor(type, energyConsumption, initialCapacity, wifiStandard, osCompatibility, app){
        super(type, energyConsumption, initialCapacity)
        this.wifiStandard = wifiStandard;
        this.osCompatibility = osCompatibility;
        this.app = app;
        this.#colour = "white";
        this.#isConnected = false;
    }

    #colour;
    #isConnected;
    #userName;

    pair(userName, os){
        if (!this.#isConnected && this.osCompatibility.includes(os)){
            this.#isConnected = true;
            userName = userName;
        }
    }

    unPair(){
        this.#isConnected = false;
        this.#userName = "";
    }

    changeColour(colour){
        if (!this.#isConnected){
            console.log("Please pair with your device first.")
        }
        else {
            this.#colour = colour;
            console.log(`Colour is ${colour}`);
        }
    }
}

class LighthouseLamp extends Lamp{
    constructor(type, energyConsumption, initialCapacity, location, range, lastMaintenanceDate){
        super(type, energyConsumption, initialCapacity)
        this.location = location;
        this.range = range;
        this.lastMaintenanceDate = lastMaintenanceDate;
    }

    #rotate(){
        console.log("Rotating...");
    }

    #stop(){
        console.log("Rotating stopped.");
    }

    turnOn(){
        super.turnOn();
        this.#rotate();
    }

    turnOff(){
        super.turnOff();
        this.#stop();
    }
}

class Chandelier{
    constructor(numberOfLights, material, weight) {
        this.numberOfLights = numberOfLights;
        this.material = material;
        this.weight = weight;
        this.#installedLamps = [];
      }
      #installedLamps;

      installLamps(...lamps){
        this.turnOff();
        this.#installedLamps = lamps.slice(0, this.numberOfLights);
      }

      turnOn(){
        if(this.#installedLamps.length > 0){
           this.#installedLamps.forEach(lamp => lamp.turnOn());
        }
        else{
            console.log("No light bulbs installed.");
        }
      }

      turnOff(){
        this.#installedLamps.forEach(lamp => lamp.turnOff());
      }
}

let wifiLamp = new WifiLamp("LED", 60, 5, "Very standard", ["iOS", "Android"], "LightApp");
wifiLamp.turnOn();
wifiLamp.changeColour("pink");
wifiLamp.pair("Yuliia", "iOS");
wifiLamp.changeColour("green");
wifiLamp.turnOn();

let anotherWifiLamp = new WifiLamp("LED", 60, 10, "Very standard", ["iOS", "Android"], "LightApp");

let chandelier = new Chandelier(2, "Glass", 1);
chandelier.turnOn();
chandelier.installLamps(wifiLamp, anotherWifiLamp);
chandelier.turnOn();
chandelier.turnOff();

