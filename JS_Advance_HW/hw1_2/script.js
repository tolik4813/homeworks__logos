// Збереження даних користувача у localStorage
function saveUser(name, email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return 'Користувач з таким E-mail вже існує';
    } else {
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        return 'success';
    }
}

// Перевірка введених даних під час реєстрації
function validateRegistration(name, email, password) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!name || !email || !password) {
        return 'Будь ласка, заповніть всі поля';
    } else if (!emailPattern.test(email)) {
        return 'Будь ласка, введіть коректний E-mail';
    } else if (!passwordPattern.test(password)) {
        return 'Пароль має містити принаймні 8 символів, включаючи принаймні одну літеру та одну цифру';
    } else {
        return 'success';
    }
}

// Перевірка введених даних під час логінування
function validateLogin(email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = users.find(user => user.email === email && user.password === password);
    if (!email || !password) {
        return 'Будь ласка, заповніть всі поля';
    } else if (!currentUser) {
        return 'Неправильний E-mail або пароль';
    } else {
        return 'success';
    }
}

// Функція, що переходить до блоку профайлу
function showProfile(email) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = users.find(user => user.email === email);
    let profileName = document.getElementById('profile-name');
    let profileEmail = document.getElementById('profile-email');
    profileName.textContent = currentUser.name;
    profileEmail.textContent = currentUser.email;
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('register').classList.add('hidden');
    document.getElementById('login').classList.add('hidden');
    document.getElementById('profile').classList.remove('hidden');
}

// Функція, що переходить до блоку Sign In
function showSignIn() {
    document.getElementById('register').classList.remove('hidden');
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('profile').classList.add('hidden');
}

const btnRegistration = document.querySelector('#reg-btn');
const btnSingIn = document.querySelector('#login-btn');
const btnSingOut = document.querySelector('#logout-btn');

btnRegistration.addEventListener('click', () => {
    let userName = document.querySelector('#reg-name').value
    let userEmail = document.querySelector('#reg-email').value
    let userPassword = document.querySelector('#reg-password').value
    let validResult = validateRegistration(userName, userEmail, userPassword);

    if (validResult == 'success') {
        let resultSave = saveUser(userName, userEmail, userPassword);
        if (resultSave == 'success') {
            alert(resultSave);
        document.querySelector('#reg-name').value = '';
        document.querySelector('#reg-email').value = '';
        document.querySelector('#reg-password').value = '';
        } else {
            alert(resultSave);
        }
    } else {
        alert(validResult);
    }
});

btnSingIn.addEventListener('click', () => {
    let userLogin = document.querySelector('#login-email').value;
    let userPassword = document.querySelector('#login-password').value;
    let validResult = validateLogin(userLogin , userPassword);
    if (validResult == 'success') {
        showProfile(userLogin);
    } else {
        alert(validResult);
    }
});

btnSingOut.addEventListener('click', () => {
    showSignIn();
});