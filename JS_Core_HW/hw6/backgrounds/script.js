// Color Change
let color = document.querySelector('.color');
let aqua = document.querySelector('.aqua');
let brown = document.querySelector('.brown');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let purple = document.querySelector('.purple');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
let lawnGreen = document.querySelector('.lawngreen');
let gray = document.querySelector('.gray');
color.addEventListener('click', function ChangeBgrColor() {
    document.querySelector('.container_colors').classList.remove('invisible');
    document.querySelector('.container_images').classList.add('invisible');

});

aqua.addEventListener('click',function ChangeBgrColorAqua() {
    document.body.style.background = 'aqua';
});

brown.addEventListener('click',function ChangeBgrColorBrown() {
    document.body.style.background = 'brown';
});

red.addEventListener('click',function ChangeBgrColorRed() {
    document.body.style.background = 'red';
});

blue.addEventListener('click',function ChangeBgrColorBlue() {
    document.body.style.background = 'blue';
});

purple.addEventListener('click',function ChangeBgrColorPurple() {
    document.body.style.background = 'purple';
});

yellow.addEventListener('click',function ChangeBgrColorYellow() {
    document.body.style.background = 'yellow';
});

green.addEventListener('click',function ChangeBgrColorGreen() {
    document.body.style.background = 'green';
});

lawnGreen.addEventListener('click',function ChangeBgrColorLawnGreen() {
    document.body.style.background = 'lawngreen';
});

gray.addEventListener('click',function ChangeBgrColorGray() {
    document.body.style.background = 'gray';
});

// Img Change
let image = document.querySelector('.image');
let img_one = document.querySelector('.img_one');
let img_two = document.querySelector('.img_two');
let img_three = document.querySelector('.img_three');
let img_four = document.querySelector('.img_four');
let img_five = document.querySelector('.img_five');
let img_six = document.querySelector('.img_six');
let img_seven = document.querySelector('.img_seven');
let img_eight = document.querySelector('.img_eight');
let img_nine = document.querySelector('.img_nine');

image.addEventListener('click', function ChangeBgrImg() {
    document.querySelector('.container_images').classList.remove('invisible');
    document.querySelector('.container_colors').classList.add('invisible');
});

img_one.addEventListener('click',function ChangeBgrImgOne() {
    document.body.style.backgroundImage = 'url(https://cs14.pikabu.ru/post_img/big/2023/01/09/9/1673278708140859048.jpg)';
});

img_two.addEventListener('click',function ChangeBgrImgTwo() {
    document.body.style.backgroundImage = 'url(https://phonoteka.org/uploads/posts/2021-07/1625523912_1-phonoteka-org-p-krutie-zastavki-na-noutbuk-krasivie-zastav-1.jpg)';
});

img_three.addEventListener('click',function ChangeBgrImgThree() {
    document.body.style.backgroundImage = 'url(https://kartinkin.net/uploads/posts/2022-12/thumbs/1670624785_59-kartinkin-net-p-kartinki-na-glavnii-ekran-noutbuka-oboi-59.jpg)';
});

img_four.addEventListener('click',function ChangeBgrImgFour() {
    document.body.style.backgroundImage = 'url(https://phonoteka.org/uploads/posts/2022-04/thumbs/1651143616_68-phonoteka-org-p-oboi-na-rabochii-stol-razbitii-monitor-kra-68.jpg)';
});

img_five.addEventListener('click',function ChangeBgrImgFive() {
    document.body.style.backgroundImage = 'url(https://oir.mobi/uploads/posts/2021-03/thumbs/1616576599_28-p-fon-na-noutbuk-dlya-rabochego-stola-31.jpg)';
});

img_six.addEventListener('click',function ChangeBgrImgSix() {
    document.body.style.backgroundImage = 'url(https://gamerwall.pro/uploads/posts/2021-11/thumbs/1637612609_2-gamerwall-pro-p-oboi-na-noutbuk-minimalizm-oboi-na-rabochi-2.jpg)';
});

img_seven.addEventListener('click',function ChangeBgrImgSeven() {
    document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/8b/a4/13/8ba413bde26ce704c31be2c118226d3b.jpg)';
});

img_eight.addEventListener('click',function ChangeBgrImgEight() {
    document.body.style.backgroundImage = 'url(https://tipik.ru/wp-content/uploads/2019/06/%D0%97%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%B0-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE018-1.jpg)';
});

img_nine.addEventListener('click',function ChangeBgrImgNine() {
    document.body.style.backgroundImage = 'url(https://cs14.pikabu.ru/post_img/big/2023/01/09/9/1673278708123260378.jpg)';
});

let crest = document.querySelector('.crest');
crest.addEventListener('click',() => {
    document.querySelector('.container_colors').classList.add('invisible');
    document.querySelector('.container_images').classList.add('invisible');
})
