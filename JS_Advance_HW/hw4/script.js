// Task 1
class Worker {
    constructor(firstName, secondName, rate, days) {
        this.name = firstName;
        this.surname = secondName;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.days * this.rate;
    }
}

const firstWorker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log('Виводимо данні Ivan');
console.log(firstWorker.name); // виведе 'Ivan'
console.log(firstWorker.surname); //виведе 'Ivanov'
console.log(firstWorker.rate); //виведе 10
console.log(firstWorker.days); //виведе 31
console.log(firstWorker.getSalary()); //виведе 310 - тобто 10*31

const secondWorker = new Worker('Tolik', 'Legotin', 20, 24);
console.log('Виводимо Tolik');
console.log(secondWorker.name); // виведе 'Tolik'
console.log(secondWorker.surname); //виведе 'Legotin'
console.log(secondWorker.rate); //виведе 20
console.log(secondWorker.days); //виведе 24
console.log(secondWorker.getSalary()); //виведе 480 - тобто 20*24

// Task 2
class MyString extends String {
    reverse(someString) {
        return someString.split('').reverse().join('');
    }

    ucFirst(someString) {
        const splitted = someString.split('');
        const first = splitted[0].toUpperCase();
        const rest = [...splitted];
        rest.splice(0, 1);
        const result = [first, ...rest].join("");
        return result;
    }

    ucWords(someString) {
        let str = someString.toLowerCase();
        return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
            function (s) {
                return s.toUpperCase();
            });
    }
}

const str = new MyString();
console.log(str.reverse('IVAN')); //виведе 'NAVI'
console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'

// Task 3
class CoffeeMake {
    on() {
        console.log('coffeeMake On');
    }

    off() {
        console.log('coffeeMake Off');
    }
}

class DripCoffeeMaker extends CoffeeMake {
    brew() {
        console.log('Brewing drip coffee');
    }
}

class EspressoMachine extends CoffeeMake {
    brew() {
        console.log('Brewing espresso');
    }

    steamMilk() {
        console.log('Steaming milk');
    }
}

class  PodCoffeeMaker extends CoffeeMake {
    brew() {
        console.log('Brewing pod coffee');
    }

    clean() {
        console.log('Cleaning pod coffee maker');
    }
}

const coffeeMake = new CoffeeMake;
const espressoMachine = new EspressoMachine;
const podCoffeeMaker = new PodCoffeeMaker;

coffeeMake.on();
coffeeMake.off();
espressoMachine.on();
espressoMachine.off();
espressoMachine.brew();
espressoMachine.steamMilk();
podCoffeeMaker.on();
podCoffeeMaker.off();
podCoffeeMaker.brew();
podCoffeeMaker.clean();
