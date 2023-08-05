// Task 1
let city: string;
city = 'Київ';
city = 'Львів';
let address: string = city;
console.log(address);

// Task 2
function parneNeparne() {
    const number = Number(prompt('Введіть число:'));
    const message = number === 0 ? 'Число 0' : number % 2 === 0 ? 'Число парне' : 'Число непарне';
    console.log(message);
}
// parneNeparne();

// Task 3
function findMaxNumber(...numbers: number[]): number {
    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}
const max = findMaxNumber(10, 5, 8, 15, 3);
console.log(max); // Виведе 15

// Task 4
function getSqrt(number: number): string {
    if (number === undefined) {
        return 'Будь ласка, введіть число!';
    }

    if (typeof number !== 'number' || isNaN(number)) {
        return 'Повинно бути числове значення.';
    }

    if (number < 0) {
        return 'Введіть додатнє число.';
    }

    const sqrt = Math.sqrt(number);
    return `Квадратний корінь з ${number} дорівнює ${sqrt}.`;
}

console.log(getSqrt(9));
console.log(getSqrt(-4));
console.log(getSqrt('abc'));
console.log(getSqrt());

// Task 5
const addButton = document.getElementById('addButton');
const censorButton = document.getElementById('censorButton');
const inputField = document.getElementById('inputField');
const textarea = document.getElementById('textarea');
const badWordsList = document.getElementById('badWordsList');
let badWords: string[] = [];

const addBadWord = () => {
    const word = inputField.value.trim();

    if (word) {
        badWords.push(word);
        inputField.value = '';
        displayBadWords();
    } else {
        alert('Поле для слова не заповнено!');
    }
};

const displayBadWords = () => {
    badWordsList.innerHTML = '';

    for (const word of badWords) {
        const listItem = document.createElement('li');
        listItem.textContent = word+',';
        badWordsList.appendChild(listItem);
    }
};

const censorText = () => {
    const text = textarea.value;
    if(!textarea.value) {
        alert('Поле для слова не заповнено!');
    }
    let censoredText = text;

    for (const word of badWords) {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        censoredText = censoredText.replace(regex, '*'.repeat(word.length));
    }

    textarea.value = censoredText;
};

addButton.addEventListener('click', addBadWord);
censorButton.addEventListener('click', censorText);
