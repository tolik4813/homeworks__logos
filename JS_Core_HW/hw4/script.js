// Налаштування коліру задньго фону
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'violet'];
function changeBackground() {
    document.body.style.background = rainbow[Math.floor(7 * Math.random())];
}

// Заміна шрифтів на сторінці
const fonts = ['Climate Crisis', 'Montserrat', 'Overpass Mono', 'Tilt Neon', 'Tilt Prism'];
function changeFontStyle() {
    document.body.style.fontFamily = fonts[Math.floor(5 * Math.random())];
}

// Вибрати як буде розташований заголовок
const userPositionHeadder = document.querySelector('.position_headder');
const headderStyles = ['headder-left', 'headder-right', 'headder-centre'];
function headerCentering() {
    if (!userPositionHeadder.value) {
        console.log('error');
        document.querySelector('.position_headder').classList.add('error');
    } else if (userPositionHeadder.value === 'зліва') {
        document.querySelector('.headder').classList.add(headderStyles[0]);
        document.querySelector('.position_headder').value = '';
        document.querySelector('.headder').classList.remove('headder-right');
        document.querySelector('.headder').classList.remove('headder-centre');
        document.querySelector('.position_headder').classList.remove('error');
    } else if (userPositionHeadder.value === 'зправа') {
        document.querySelector('.headder').classList.add(headderStyles[1]);
        document.querySelector('.position_headder').value = '';
        document.querySelector('.headder').classList.remove('headder-left');
        document.querySelector('.headder').classList.remove('headder-centre');
        document.querySelector('.position_headder').classList.remove('error');
    } else if (userPositionHeadder.value === 'центр') {
        document.querySelector('.headder').classList.add(headderStyles[2]);
        document.querySelector('.position_headder').value = '';
        document.querySelector('.headder').classList.remove('headder-left');
        document.querySelector('.headder').classList.remove('headder-right');
        document.querySelector('.position_headder').classList.remove('error');
    } else {
        document.querySelector('.position_headder').classList.add('error');
        document.querySelector('.position_headder').value = '';
    }
}
// Зміна фону посилань
function changeBackgroundUrl() {
    document.querySelector('.favorit_site').style.background = rainbow[Math.floor(7 * Math.random())];
}
// Заміна коліру тексту мої любимі сайти
function changeTextColor() {
    document.querySelector('.favorit_site').style.color = rainbow[Math.floor(7 * Math.random())];
}

//Заміна кольору самих посилань
function changeUrlTextColor() {
    const links = [document.querySelector('.one'),document.querySelector('.two'),document.querySelector('.three')];
        links[0].style.color = rainbow[Math.floor(7 * Math.random())];;
        links[1].style.color = rainbow[Math.floor(7 * Math.random())];;
        links[2].style.color = rainbow[Math.floor(7 * Math.random())];;
}

// Колір у тексту у всьому контейнері
function changeColorTextContainer() {
    document.querySelector('.container').style.color = rainbow[Math.floor(7 * Math.random())];
}

// Розмір тексту у вьому контейнері меньше і більше
// Text smaller
let fontSize = '17px';
function containerTextSmaller() {
    if (fontSize == '17px') {
        document.querySelector('.container').style.fontSize = '12px';
        fontSize = '12px'
    } else if (fontSize == '36px') {
        document.querySelector('.container').style.fontSize = '17px';
        fontSize = '17px'
    }
}
// Text bigger
function containerTextBigger() {
    if (fontSize == '12px') {
        document.querySelector('.container').style.fontSize = '17px';
        fontSize = '17px'
    } else if (fontSize == '17px') {
        document.querySelector('.container').style.fontSize = '36px';
        fontSize = '36px'
    }
}

// Товшина тексту у вьому контейнері

let fontsWeigh = 400;
// Text weight smaller
function weightContainerTextSmaller() {
    if (fontSize == 400) {
        document.querySelector('.container').style.fontSize = 200;
        fontSize = 200
    } else if (fontSize == 600) {
        document.querySelector('.container').style.fontSize = 400;
        fontSize = 400
    }
}
// Text weight bigger
function weightContainerTextBigger() {
    if (fontSize == 200) {
        document.querySelector('.container').style.fontSize = 400;
        fontSize = 400
    } else if (fontSize == 400) {
        document.querySelector('.container').style.fontSize = 600;
        fontSize = 600
    }
}

//тип маркера для маркованого списку на сторінці
const ListMarkers = ['armenian', 'circle', 'decimal', 'decimal-leading-zero', 'disc', 'georgian', 'lower-alpha', 'lower-greek', 'lower-latin', 'lower-roman'];
let iterator = 0;
function changeListMarkers() {
    if (iterator < 10) {
        document.querySelector('.ul_tasks').style.listStyleType = ListMarkers[iterator];
        iterator++
    } else if (iterator = 10) {
        iterator = 0;
    }
    document.querySelector('.ul_tasks').style.listStyleType = ListMarkers[Math.floor(10 * Math.random())]
}

// кнопка яка прибирае всі налаштування і робить сайти по середині
function saveAllChanges() {
    document.querySelector('.container').classList.add('invisible');
    document.querySelector('.container_sites').classList.add('sites_second_style');
    document.querySelector('.container_input').style.justifyContent = 'center';
}

// додавання посилань користувача,зробити окрема кнопка
function addUserUrl() {
    let firsUserUrl = prompt('ведіть посилання');
    let secondUserUrl = prompt('ведіть посилання');
    let thirdUserUrl = prompt('ведіть посилання');
    const links = [document.querySelector('.one'),document.querySelector('.two'),document.querySelector('.three')];
        links[0].innerText = firsUserUrl;
        links[1].innerText = secondUserUrl;
        links[2].innerText = thirdUserUrl;
        links[0].href = firsUserUrl;
        links[1].href = secondUserUrl;
        links[2].href = thirdUserUrl;
}
