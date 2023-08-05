// Task move
const firstInput = document.querySelector('.first');
const moveBtn = document.querySelector('.btn');
const secondInput = document.querySelector('.second');
moveBtn.addEventListener('click', () => {
    const firstValue = firstInput.value;
    if (!firstValue) return;
    secondInput.value = firstValue;
    firstInput.value = '';
});
// Task placeholder
const inputPlaceholder = document.querySelector('.input_placeholder');
inputPlaceholder.addEventListener('focusout', () => {
    const placeholder = document.querySelector('.input_placeholder').value;
    if (!placeholder) return;
    inputPlaceholder.placeholder = placeholder;
    inputPlaceholder.value = '';
});
