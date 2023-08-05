// Task 1
console.log('Task 1');
let numb = +prompt('Ведіть число');
let result = 1;
while(numb){
    result *= numb--;
}
console.log(result);

// Task 2
console.log('Task 2');
for (let index = 1000; index < 10000; index += 3) {
    console.log(index);
}

// Task 3
console.log('Task 3');
let elem = 1;
for (let i = 0; i < 55; i++) {
    elem+=2;
    console.log(elem);
}

// Task 4
console.log('Task 4');
for (let index = 90; index >= 0; index-=5) {
    console.log(index);
}

// Task 5
console.log('Task 5');
let element = 2
for (let index = 0; index < 20; index++) {
    console.log(element);
    element*=2;
}

// Task 6
console.log('Task 6');
for (let a = 2; a < 10000; a = 2*a-1) {
    console.log(a);
}

// Task 7
console.log('Task 7');
for (let a = -166;a < 100; a = 2*a+200) {
        if (a > - 100) {
            console.log(a);
        }
}

// Task 8
console.log('Task 8');
let userNumber = +prompt('Ведіть число');
let userDegree = +prompt('Ведіть степінь');
let degreeResult = 1;
for (let a=0; a <  Math.abs(userDegree); a++) {
        degreeResult = userNumber * userNumber;
}
if (userDegree > 0) {
    console.log(degreeResult);
} else if (userDegree < 0) {
    console.log(1/degreeResult);
} else if (userDegree == 0){
    console.log(1);
}