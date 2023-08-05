// Task 1
function someFunction(num) {
    let firstNum = num;
    let memory = 0;

    const innerFn = function (firstNum) {
        memory += firstNum;
        console.log(memory);
    }

    return innerFn;
}

const sum = someFunction();

sum(3);
sum(10);
sum(20);

// Task 2
import shoppingCart from "./shoppingCart.js";

console.log(shoppingCart.addItem('Вино'));
console.log(shoppingCart.items);