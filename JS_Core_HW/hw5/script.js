// Task 1
let box_one = document.querySelector('.one');
let iterator_box_one = 0;
box_one.addEventListener('mouseover', function boxOneChangeColor() {
    if (iterator_box_one == 0) {
        box_one.style.backgroundColor = 'red';
        iterator_box_one++
    } else if (iterator_box_one == 1) {
        box_one.style.backgroundColor = 'yellow';
        iterator_box_one++
    } else if (iterator_box_one == 2) {
        box_one.style.backgroundColor = 'green';
        iterator_box_one = 0;
    }
})
box_one.addEventListener('mouseout', function boxOneBasicsColor() {
    box_one.style.backgroundColor = 'blueviolet';
})

// Task2
let box_secret = document.querySelector('.secret');
box_secret.addEventListener('mouseover', function mouseOverSecret() {
    box_secret.innerText = 'Хочеш знати який';
    box_secret.classList.add('second_secret');
    box_secret.classList.remove('secret');
})
box_secret.addEventListener('mouseout', function mouseOutSecret() {
    box_secret.innerText = 'У мене є секрет!';
    box_secret.classList.add('secret');
    box_secret.classList.remove('second_secret');
    box_secret.classList.remove('third_secret');
})
box_secret.addEventListener('mousedown', function mouseDownSecret() {
    box_secret.innerText = 'А я тобі не скажу';
    box_secret.classList.add('third_secret');
    box_secret.classList.remove('second_secret');
    box_secret.classList.remove('secret');
})
box_secret.addEventListener('mouseup', function mouseUpSecret() {
    box_secret.innerText = 'Хочеш знати який';
    box_secret.classList.add('second_secret');
    box_secret.classList.remove('third_secret');
    box_secret.classList.remove('secret');
})
// Task 3
let box_img_one = document.querySelector('.img_one');
let box_img_second = document.querySelector('.img_second');
let box_img_third = document.querySelector('.img_third');
box_img_one.addEventListener('click',function clickBoxImgOne() {
    let userBgrUrlOne = prompt('Ведіть посилання на картинку');
    box_img_one.style.backgroundImage = `url(${userBgrUrlOne})`
});
box_img_second.addEventListener('click',function clickBoxImgSecond() {
    let userBgrUrlSecond = prompt('Ведіть посилання на картинку');
    box_img_second.style.backgroundImage = `url(${userBgrUrlSecond})`
});
box_img_third.addEventListener('click',function clickBoxImgThird() {
    let userBgrUrlThird = prompt('Ведіть посилання на картинку');
    box_img_third.style.backgroundImage = `url(${userBgrUrlThird})`
});

// Task 4
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');
let orange = document.querySelector('.orange');
let gray = document.querySelector('.gray');
red.addEventListener('click',function click() {

});
red.addEventListener('click',function clickRed() {
    red.style.color = 'red';
});
yellow.addEventListener('click',function clickYellow() {
    yellow.style.color = 'yellow';
});
green.addEventListener('click',function clickGreen() {
    green.style.color = 'green';
});
blue.addEventListener('click',function clickBlue() {
    blue.style.color = 'blue';
});
orange.addEventListener('click',function clickOrange() {
    orange.style.color = 'orange';
});
gray.addEventListener('click',function clickGray() {
    gray.style.color = 'gray';
});






