const singUpContainer = document.querySelector('.sing_up_container');
const firstName = document.querySelector('#firstName');
const secondName = document.querySelector('#secondName');
const email = document.querySelector('#emailAddres');
const gender = document.querySelectorAll('.radio_btn');
const position = document.querySelector('#position');
const checkBox = document.querySelector('#check')
const btnSingUp = document.querySelector('.btn_sing_up_no');
// Next page
const containerUser = document.querySelector('.invisible');
const userImg = document.querySelector('.userImg');
const imgMan = document.querySelector('.user_img_man');
const imgWoman = document.querySelector('.user_img_woman');
// const userName = document.querySelector('.user_name');
const userEmail = document.querySelector('.user_email');
const userPosition = document.querySelector('.user_position');
const btnSingOut = document.querySelector('.btn_sing_out');

checkBox.addEventListener('click', () => {
    if (checkBox.checked && firstName.value && secondName.value && email.value && position.value && gender[0].checked || gender[1].checked) {
        btnSingUp.classList.add('btn_sing_up');
        btnSingUp.classList.remove('btn_sing_up_no');
    }else {
        btnSingUp.classList.remove('btn_sing_up');
        btnSingUp.classList.add('btn_sing_up_no');
        checkBox.checked = false;
    }
});

btnSingUp.addEventListener('click',() => {
    if (checkBox.checked) {
        containerUser.classList.add('container_user');
        containerUser.classList.remove('invisible');
        singUpContainer.classList.add('invisible');
        singUpContainer.classList.remove('.sing_up_container');
        document.querySelector('.user_name').innerText = firstName.value + ' ' + secondName.value;
        document.querySelector('.user_email').innerText = email.value;
        document.querySelector('.user_position').innerText = position.value;
        if (gender[0].checked) {
            document.querySelector('.user_img_man').classList.remove('invisible');
            document.querySelector('.user_img_woman').classList.add('invisible');
        } else if (gender[1].checked) {
            document.querySelector('.user_img_man').classList.add('invisible');
            document.querySelector('.user_img_woman').classList.remove('invisible');
        }
    }
});

btnSingOut.addEventListener('click' , () => {
    containerUser.classList.remove('container_user');
    containerUser.classList.add('invisible');
    singUpContainer.classList.remove('invisible');
    singUpContainer.classList.add('.sing_up_container');
    firstName.value = '';
    secondName.value = '';
    email.value = '';
    gender[0].checked = false;
    gender[1].checked = false;
    position.value = '';
    checkBox.checked = false;
});