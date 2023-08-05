// Task 1
const person = {};
person.firstName = 'Ivan';
person.secondName = 'Ivanov';
person.showData =  function show () {
    console.log(this.firstName,this.secondName);
}
const newPerson = {...person};
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';
person.showData();
newPerson.showData();

// Task 2
const MyMath = {};
MyMath.a = 5;
MyMath.b = 2;
MyMath.sum = function MyMathSum (){
    console.log(this.a + this.b);
}
MyMath.multiplication = function MyMathMultiplication (){
    console.log(this.a * this.b);
}
MyMath.division = function MyMathDivision (){
    console.log(this.a / this.b);
}
MyMath.subtraction = function MyMathSubtraction (){
    console.log(this.a - this.b);
}
MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction();

