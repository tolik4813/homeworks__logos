const textContainer = document.querySelector('.container_text');
// Bold text
const boldBtn = document.querySelector('.bold');
let iteratorBold = 0;
boldBtn.addEventListener('click', () => {
    if (iteratorBold == 0) {
        textContainer.style.fontWeight = 'bold';
        boldBtn.classList.add('active');
        iteratorBold = 1;
    } else if (iteratorBold == 1) {
        textContainer.style.fontWeight = '300';
        boldBtn.classList.remove('active');
        iteratorBold = 0;
    }
});

// Cursive
const cursiveBtn = document.querySelector('.cursive');
let iteratorCursive = 0;
cursiveBtn.addEventListener('click', () => {
    if (iteratorCursive == 0) {
        textContainer.style.fontStyle = 'italic';
        cursiveBtn.classList.add('active');
        iteratorCursive = 1;
    } else if (iteratorCursive == 1) {
        textContainer.style.fontStyle = 'normal';
        cursiveBtn.classList.remove('active');
        iteratorCursive = 0;
    }
});

// Pidkresleno
const pidBtn = document.querySelector('.pidkresl');
let iteratorPid = 0;
pidBtn.addEventListener('click', () => {
    if (iteratorPid == 0) {
        textContainer.style.textDecorationLine = 'underline';
        pidBtn.classList.add('active');
        iteratorPid = 1;
    } else if (iteratorPid == 1) {
        textContainer.style.textDecorationLine = 'none';
        pidBtn.classList.remove('active');
        iteratorPid = 0;
    }
});

//Zakresleno
const zakBtn = document.querySelector('.zakresl');
let iteratorZak = 0;
zakBtn.addEventListener('click', () => {
    if (iteratorZak == 0) {
        textContainer.style.textDecorationLine = 'line-through';
        zakBtn.classList.add('active');
        iteratorZak = 1;
    } else if (iteratorZak == 1) {
        textContainer.style.textDecorationLine = 'none';
        zakBtn.classList.remove('active');
        iteratorZak = 0;
    }
});

//Text Left
const leftBtn = document.querySelector('.left');
leftBtn.addEventListener('click', () => {
    textContainer.style.textAlign = 'left';
    leftBtn.classList.add('active');
    centerBtn.classList.remove('active');
    rightBtn.classList.remove('active');
});

//Text Center
const centerBtn = document.querySelector('.center');
centerBtn.addEventListener('click', () => {
    textContainer.style.textAlign = 'center';
    leftBtn.classList.remove('active');
    centerBtn.classList.add('active');
    rightBtn.classList.remove('active');
});

//Text Right
const rightBtn = document.querySelector('.right');
rightBtn.addEventListener('click', () => {
    textContainer.style.textAlign = 'right';
    leftBtn.classList.remove('active');
    centerBtn.classList.remove('active');
    rightBtn.classList.add('active');
});

//Font Style
const selectFamily = document.querySelector('#fontFamily');

selectFamily.addEventListener('change', event => {
    const value = event.target.value;
    event.target.querySelector('option').setAttribute('selected', false);
    event.target.selectedIndex = 0;
    if (value == "Montserrat") {
        textContainer.style.fontFamily = 'Montserrat';
    } else if (value == "Overpass Mono") {
        textContainer.style.fontFamily = 'Overpass Mono';
    } else if (value == "Times New Roman") {
        textContainer.style.fontFamily = 'Times New Roman';
    }
});

// Font Size

const select = document.querySelector('#fontSize');
const allP = document.querySelectorAll('.text');

select.addEventListener('change', event => {
    const value = event.target.value;
    event.target.querySelector('option').setAttribute('selected', false);
    event.target.selectedIndex = 0;
    allP.forEach(elem => {
        elem.style.fontSize = value;
    })
});

// Text Color
const palitreBtn = document.querySelector('.palitre');
const colorsContainer = document.querySelector('.container_colors');
const exitBtn = document.querySelector('.exit');
const redColorBtn = document.querySelector('.red_color');
const yellowColorBtn = document.querySelector('.yellow_color');
const greenColorBtn = document.querySelector('.green_color');
const blackColorBtn = document.querySelector('.black_color');
const purpleColorBtn = document.querySelector('.purple_color');
const aquaColorBtn = document.querySelector('.aqua_color');
const blueColorBtn = document.querySelector('.blue_color');
const brownColorBtn = document.querySelector('.brown_color');
const orangeColorBtn = document.querySelector('.orange_color');
const greyColorBtn = document.querySelector('.grey_color');

palitreBtn.addEventListener('click', () => {
    colorsContainer.classList.remove('invisible');
});

exitBtn.addEventListener('click', () => {
    colorsContainer.classList.add('invisible');
});

redColorBtn.addEventListener('click', () => {
    textContainer.style.color = 'red';
});

yellowColorBtn.addEventListener('click', () => {
    textContainer.style.color = 'yellow';
});

greenColorBtn.addEventListener('click', () => {
    textContainer.style.color = 'green';
});

blackColorBtn.addEventListener('click', () => {
    textContainer.style.color = 'black';
});

purpleColorBtn.addEventListener('click', () => {
    textContainer.style.color = 'purple';
});

aquaColorBtn.addEventListener('click', () => {
    textContainer.style.color = 'aqua';
});

blueColorBtn.addEventListener('click', () => {
    textContainer.style.color = 'blue';
});

brownColorBtn.addEventListener('click', () => {
    textContainer.style.color = 'brown';
});

orangeColorBtn.addEventListener('click', () => {
    textContainer.style.color = 'orange';
});

greyColorBtn.addEventListener('click', () => {
    textContainer.style.color = 'gray';
});

// Change background
const btnImg = document.querySelector('.img');
const backgroundContainer = document.querySelector('.container_colors_background');
const exitBg = document.getElementById('exit_bg');
const btnColors = document.querySelector('.btn_colors');
const btnImages = document.querySelector('.btn_images');
const btnFiles = document.querySelector('.btn_files');

btnImg.addEventListener('click',() => {
    backgroundContainer.classList.remove('invisible');
});

exitBg.addEventListener('click', () => {
    backgroundContainer.classList.add('invisible');
});

btnColors.addEventListener('click', () => {
    
});

btnImages.addEventListener('click', () => {
    
});

btnFiles.addEventListener('click', () => {
    
});