// Task 1
let userNumber = +prompt('Please, print a month number (1-12)');
switch (userNumber) {
    case 1:
    case 2:
    case 12:
        alert('Winter');
        break;
    case 3:
    case 4:
    case 5:
        alert('Spring');
        break;
    case 6:
    case 7:
    case 8:
        alert('Summer');
        break;
    case 9:
    case 10:
    case 11:
        alert('Autumn');
        break;
    default:
        alert("Error number is not bettwen 1-12");
        break;
}
// Task 2
    function isNumberPrime(n) {
        if (n < 2) {
            console.log('Число повинно бути більше за 1');
        }else if (n === 2){
            console.log('Число просте');
        }else{
            for (let x = 2; x < n; x++) {
                if (n % x === 0){
                    return false;
                }
            }
            return true;
        }
    }

    let number = +prompt('Ведіть число для перевірки чи воно просте');
    if (isNumberPrime(number)) {
        console.log('число просте');
    }else {
        console.log('число складне');
    }

// Task 3
function maxNumber() {
    let max = arguments[0];
    for (let i = 0; i <= arguments.length ; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log('Максимальне число = ', max);
}
maxNumber(-10,-20,-30)