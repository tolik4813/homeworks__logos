// Task 1
console.log('Task 1');
let password = 'password';
let iterator = 0;
let userTry = 4;
do {
    let userPassword = prompt('Введіть пароль')
    if (userPassword == password) {
        console.log('Запрошуємо на сайт!');
        iterator = 5;
    }
    if (userPassword != password) {
        console.log('У вас залишилося', userTry ,' спроби!');
        userTry--
    }
    if (userTry < 0) {
        console.log('Будь ласка спробуйте пізніше!');
        iterator = 5;
    }
    iterator++
    }while (iterator<5)
// Task 2
console.log('Task2/task 1');
let numb = +prompt('Ведіть число');
let result = 1;
while(numb){
    result *= numb--;
}
console.log(result);
// ------------------------------------------------------------------------------------------
console.log('Task2/task 2');
let index = 1000;
while (index < 10000) {
    console.log(index);
    index += 3
}
// ------------------------------------------------------------------------------------------
console.log('Task2/task 3');
let elem = 1;
let i = 0;
while (i < 55) {
    elem+=2;
    console.log(elem);
    i++
}
// ------------------------------------------------------------------------------------------
console.log('Task2/task 4');
let a = 90;
while (a >= 0) {
    console.log(a);
    a-=5
}
// ------------------------------------------------------------------------------------------
console.log('Task2/task 5');
let element = 2
let b = 0;
while (b < 20) {
    console.log(element);
    element*=2;
    b++
}
// ------------------------------------------------------------------------------------------
console.log('Task2/task 6');
let c = 2;
while (c < 10000) {
    console.log(a);
    c = 2*c-1
}
// ------------------------------------------------------------------------------------------
console.log('Task2/task 7');
let d = -166;
while (d < 100) {
        if (d > - 100) {
            console.log(a);
        }
        d = 2*d+200
}
// ------------------------------------------------------------------------------------------
console.log('Task2/task 8');
let userNumber = +prompt('Ведіть число');
let userDegree = +prompt('Ведіть степінь');
let degreeResult = 1;
let e = 0;
while (e <  Math.abs(userDegree)) {
        degreeResult = userNumber * userNumber;
        e++
}
if (userDegree > 0) {
    console.log(degreeResult);
} else if (userDegree < 0) {
    console.log(1/degreeResult);
} else if (userDegree == 0){
    console.log(1);
}