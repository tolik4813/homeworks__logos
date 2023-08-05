// Task 1
let point = 0;
let answer_1 = 'Да';
let answer_2 = 'Ні';
let answer_3 = 'Да';
let answer_4 = 'Ні';
let answer_5 = 'Да';
let answer_6 = 'Ні';
let answer_7 = 'Да';
let answer_8 = 'Ні';
let answer_9 = 'Да';
let answer_10 = 'Ні';
let question_1 = prompt('Цей тест класний ?');
let question_2 = prompt('Ви коли не будь проходили такі тести ?');
let question_3 = prompt('Логос крута компанія ?');
let question_4 = prompt('Ви коли не будь вчили фронтенд ?');
let question_5 = prompt('Хотіли би вивчити фронтенд ?');
let question_6 = prompt('Вичили би фронтенд самостійно ?');
let question_7 = prompt('Вчили би фронтент з викладачем ?');
let question_8 = prompt('Можливо вивчити фронтенд за пів року ?');
let question_9 = prompt('А з курсами можливо вивчити за пів року ?');
let question_10 = prompt('Вам меньше 18 років ?');
if (question_1 == answer_1) {
    point++
}if (question_2 == answer_2) {
    point++
}if (question_3 == answer_3) {
    point++
}if (question_4 == answer_4) {
    point++
}if (question_5 == answer_5) {
    point++
}if (question_6 == answer_6) {
    point++
}if (question_7 == answer_7) {
    point++
}if (question_8 == answer_8) {
    point++
}if (question_9 == answer_9) {
    point++
}if (question_10 == answer_10) {
    point++
}
document.write ('Твої бали: ' ,point)
