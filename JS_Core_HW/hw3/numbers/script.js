// Task 1
function getArea(number) {
    if (typeof (number) == 'number') {
        console.log('Плоша круга дорівнює = ', Math.PI * number ** 2, ' одиниць квадратних');
    } else if (!number) {
        console.log('Будь ласка, введіть радіус!');
    } else if (typeof (number) != 'number') {
        console.log('Повинно бути числове значення');
    }
}
getArea(null);
getArea('не число');
getArea(10);

// Task 2
function getSqrt(number) {
    if (number < 0) {
        console.log('Введіть додатнє число');
    } else if (typeof (number) == 'number') {
        console.log('Квадратний корінь з ', number, ' дорівнює = ', Math.sqrt(number));
    } else if (!number) {
        console.log('Будь ласка введіть число!');
    } else if (typeof (number) != 'number') {
        console.log('Повино бути числове значення');
    }
}
getSqrt(null);
getSqrt('не число');
getSqrt(- 10);
getSqrt(10);

// Task 3
const getMath = {
    PI: () => 3.14,
    pow: (number, degree) => {
        if (number == null) {
            return ('Будь ласка ведіть число і ступінь');
        } else if (typeof (number) != 'number') {
            return ('Повино бути числове значення');
        } else {
            return number ** degree;
        }
    },
    abs: (number) => {
        if (number == null) {
            return ('Будь ласка ведіть число');
        } else if (typeof (number) != 'number') {
            return ('Повино бути числове значення');
        } else if (number < 0) {
            return -number;
        } else if (number > 0) {
            return number;
        }
    },
    max: function maxNumber() {
        let max = arguments[0];
        for (let i = 0; i < arguments.length; i++) {
            if (!arguments[i]) {
                return ('Будь ласка ведіть числа');
                break;
            }
            else if (typeof(arguments[i])  == 'string') {
                return ('Всі ведені елементи мають бути числами');
                break;
            }
            else if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    },
    min: function minNumber() {
        let min = arguments[0];
        for (let i = 0; i < arguments.length; i++) {
            if (!arguments[i]) {
                return ('Будь ласка ведіть числа');
                break;
            }
            else if (typeof(arguments[i])  != 'number') {
                return ('Всі ведені елементи мають бути числами');
                break;
            }
            else if (arguments[i] < min) {
                min = arguments[i];
            }
        }
        return min;
    }
}
console.log(getMath.PI());
console.log(getMath.pow(5, 2));
console.log(getMath.pow('не число'));
console.log(getMath.pow(null));
console.log(getMath.abs(null));
console.log(getMath.abs('не число'));
console.log(getMath.abs(-5));
console.log(getMath.abs(5));
console.log(getMath.max(null));
console.log(getMath.max(4,56,7,'не число',5,88));
console.log(getMath.max(4,56,7,10,5,88));
console.log(getMath.min(null));
console.log(getMath.min(4,56,7,'не число',5,88));
console.log(getMath.min(4,56,7,10,5,88));

