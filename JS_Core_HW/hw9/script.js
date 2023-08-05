const nameRegex = /^[A-Za-z]{1,20}$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegex = /^\+38\(0\d{2}\)-\d{3}-\d{2}-\d{2}$/;
const passwordRegex = /^[A-Za-z0-9]{8,15}$/;

const btn = document.querySelector('.btn');

function validation (event) {
    const userFirstName = document.querySelector('#firstName');
    const userLastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#mobile');
    const password = document.querySelector('#password');

    if (!nameRegex.test(userFirstName.value)) {
        // alert('Ім\'я та Прізвище мають містити тільки літери англійської абетки, довжина не більше 20 символів.');
        userFirstName.classList.add("incorrect");
    } else {
        userFirstName.classList.remove("incorrect");
        userFirstName.classList.add("good");
    }

    if (!nameRegex.test(userLastName.value)) {
        // alert('Ім\'я та Прізвище мають містити тільки літери англійської абетки, довжина не більше 20 символів.');
        userLastName.classList.add("incorrect");
    } else {
        userLastName.classList.remove("incorrect");
        userLastName.classList.add("good");
    }

    if (!emailRegex.test(email.value)) {
        // alert('Невірний формат e-mail адреси.');
        email.classList.add("incorrect");
    } else {
        email.classList.remove("incorrect");
        email.classList.add("good");
    }

    if (!phoneRegex.test(phone.value)) {
        // alert('Невірний формат телефону.');
        phone.classList.add("incorrect");
    } else {
        phone.classList.remove("incorrect");
        phone.classList.add("good");
    }

    if (!passwordRegex.test(password.value)) {
        // alert('Пароль повинен містити від 8 до 15 символів, що можуть бути літерами англійської абетки або цифрами.');
        password.classList.add("incorrect");
    } else {
        password.classList.remove("incorrect");
        password.classList.add("good");
    }
};

$(document).ready(function(){
    $('#mobile').mask('+38(000)-000-00-00');
});