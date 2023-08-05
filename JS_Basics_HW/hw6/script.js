// Task 1

const fib = (n) => {
    let a = 1;
    let b = 1;
    console.log(a);
    console.log(b);
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    console.log(b);
    }
}
fib(40);

// Task 2
const geometricProgresOne = function (n,q){
    let sum = 0;
    let num = 1;
for(i = 1; i <= n; i++){
    sum+=num;
    num*=q;
}
console.log(sum);
}
geometricProgresOne(4,3);

const geometricProgresSecond = function (n,q) {
    let sum = (1 * (1-Math.pow(q,n)))/(1-q)
console.log(sum);
}
geometricProgresSecond(4,3);
// Task 3
const isNumberPrime = function (n) {
    if (n < 2) {
        console.log('Число повинно бути більше за 1');
    }else if (n === 2){
        return true;
    }else{
        for (let x = 2; x < n; x++) {
            if (n % x === 0){
                return false;
            }
        }
        return true;
    }
}
const PrimeNumbers =  function (a,b){
    for (i = a; i <= b; i++){
        if (isNumberPrime(i)) {
            console.log(i);
        }
    }
}
let firstNumber = +prompt('Ведіть перше число');
let secondNumber = +prompt('Ведіть друге число');
PrimeNumbers (firstNumber,secondNumber);