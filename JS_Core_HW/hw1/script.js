// Task 1
let userText = prompt('Ведіть довільний текст');

function spaceSum(userText) {
    let sumSpace = 0;
for (let i = 0; i <userText.length;i++) {
    if(userText[i] == ' '){
        sumSpace++
    }
}
console.log(sumSpace);
}

spaceSum(userText);

// Task 2
let userEmail = prompt('Ведіть Email');
function correctEmail (userEmail){
    if (userEmail.trim().endsWith('@')){
        return false;
    }
    else if (userEmail.trim().charAt([0])== '@'){
        return false;
    }
    else if (!userEmail.includes('@')){
        return false;
    } else {
        return true;
    }
}

if(correctEmail(userEmail)){
    console.log('Correct Email Welcome');
} else {
    console.log('Error');
}

// Task 3
let userHtmlText = prompt('Ведіть текст для визначення скільки раз повторюється слово "html"')

function findHtmlInText(userHtmlText) {
let userHtmlTextSplit = userHtmlText.split(' ')
let htmlSum = 0;
for (i =0; i < userHtmlTextSplit.length; i++) {
    if (userHtmlTextSplit[i].toLowerCase().includes('html')){
        htmlSum++
    }
}
console.log(htmlSum);
}

findHtmlInText(userHtmlText);

// Task 4
let userUrl = prompt('Ведіть посилання');

function deleteHttpFromUrl (userUrl) {
    let userUrlSplit = userUrl.split('//');
    console.log(userUrlSplit[1]);
}
deleteHttpFromUrl(userUrl);