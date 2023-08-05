// Task 2
let userName = prompt('Ведіть ваше імя');
if (userName == 'Name') {
    let password = prompt('Ведіть пароль');
    if(password == 'ЛОГОС'){
        console.log('Ласкаво просимо');
    }else{
        console.log('Пароль невірний');
    }
}else if (userName == null){
    console.log('Вхід скасовано');
}else{
    console.log('Я вас не знаю');
}