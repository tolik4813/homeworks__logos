function CoffeeMake() { }

CoffeeMake.prototype.on = function () {
    console.log('Coffee maker is turned on');
}

CoffeeMake.prototype.off = function () {
    console.log('Coffee maker is turned off');
}

function DripCoffeeMaker() { }

DripCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);

DripCoffeeMaker.prototype.brew = function () {
    console.log('Brewing drip coffee');
}

function EspressoMachine() { }

EspressoMachine.prototype = Object.create(CoffeeMake.prototype);

EspressoMachine.prototype.brew = function () {
    console.log('Brewing espresso');
}

EspressoMachine.prototype.steamMilk = function () {
    console.log('Steaming milk');
}

function PodCoffeeMaker() { }

PodCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);

PodCoffeeMaker.prototype.brew = function () {
    console.log('Brewing pod coffee');
}

PodCoffeeMaker.prototype.clean = function () {
    console.log('Cleaning pod coffee maker');
}

let dripMaker = new DripCoffeeMaker();
let espressoMaker = new EspressoMachine();
let podMaker = new PodCoffeeMaker();

dripMaker.on();
espressoMaker.off();
podMaker.on();

dripMaker.brew();
espressoMaker.brew();
espressoMaker.steamMilk();