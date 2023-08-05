// Task 1
//arr.slice(0);
function arrCopy(arr) {
    let newArr =arr.slice(0);
    return newArr;
}
const arr = [1, 2, 3]
const arr1 = arrCopy(arr);
const arr2 = arrCopy(arr,[10, 20]) // TODO: Доробити щоб воно додавало масив тобто запише в змінну масив [1,2,3,[10,20]].;
console.log(arr1);
console.log(arr2);
console.log(arr);

// // Task 2
// function arrToString(arr) {
//     let toString = arr.toString();
//     const newArr = toString.split(',')
//     console.log(newArr);
// }
// const arr3 = arrToString([1,2,3]);
// const arr4 = arrToString([10,200,3333]);

// // Task 3
// function getLength(arr) {
//     console.log(arr.map(elem => elem.length));
// }
// const arr5 = getLength(['Ivan','Pavlo','Ira']);
// const arr6 = getLength(['Oleksiy','Andriana']);

// // Task 4
// function removeDuplicates (arr) {
//     let results = [];
//     newArr = arr.map(elem => elem.toLowerCase())
//     newArr.forEach(function findDuplicate (value) {
//         if (results.indexOf(value) === -1) {
//             results.push(value);
//         }
//     });

//     return results;
// }
// const arr7 = removeDuplicates(['html','css','html','js']);
// const arr8 = removeDuplicates(['html','css','js','html','js','python','js','scss']);
// console.log(arr7);
// console.log(arr8);
