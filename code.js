const body = document.body;
const form = document.querySelector("form");
const fName = document.getElementById('first-name');
const lName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('telephone');
const pswrd = document.getElementById('password');
const cPswrd = document.getElementById('confirm_pass');

const fNameError = document.getElementById('fNameError');
const lNameError = document.getElementById('lNameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const pswrdError = document.getElementById('pswrdError');
const cPswrdError = document.getElementById('cPswrdError');

const reName = /^([A-Z][a-z]{1,20})([\s-]+[A-Za-z]{2,20}(-[A-Za-z]{2,20})?)?$/gm

let fNameValid = false;
let lNameValid = false;
let emailValid = false;
let phoneValid = false;
let passCorrect = false;
let passwordValid = false;

const cover = document.createElement('div');
const message = document.createElement('div');
const imgCredit = document.createElement('div');
const link1 = document.createElement('a');
const link2 = document.createElement('a');

// ------------------ Defining a thanks cover------------------------

cover.className = 'cover';
message.className = 'message';
imgCredit.className = 'img-credit';
link1.href = "https://unsplash.com/@neom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
link2.href = "https://unsplash.com/photos/bhKqZNZeAR0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
link1.textContent = " NEOM on";
link2.textContent = " Unsplash";

message.textContent = "Thank You for Signing Up! Let the adventure begin!";
imgCredit.textContent = "Photo by";
imgCredit.appendChild(link1);
imgCredit.appendChild(link2);
cover.appendChild(message);
cover.appendChild(imgCredit);
body.appendChild(cover);
// --------------------------------------------------------------------------------------------

fName.addEventListener('input', () => {
    if (fName.value.match(reName)) {
        fNameError.textContent = "";
        fNameValid = true;
    }
    else {
        fNameError.textContent = "Invalid input";
        fNameValid = true;
    }
});

lName.addEventListener('input', () => {
    if (lName.value.match(reName)) {
        lNameError.textContent = "";
        lNameValid = true;    
    } else {
        lNameError.textContent = "Invalid input";
        lNameValid = true;
    }
});

email.addEventListener('input', () => {
    if (email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        emailError.textContent = "";
        emailValid = true;
    } else {
        emailError.textContent = "Invalid email";
        emailValid = false;   
    }
});

phone.addEventListener('input', () => {
    if (phone.value.match(/^([+]\d{1,3})?\d{8,10}$/)) {
        phoneError.textContent = "";
        phoneValid = true;
    } else {
        phoneError.textContent = "Invalid number";
        phoneValid = false;   
    }
});

pswrd.addEventListener('input', () => {
    const p = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z0-9]{8,20}$/;
    if (pswrd.value.match(p)) {
        pswrdError.textContent = "";
        passCorrect = true;
    } else {
        pswrdError.textContent = "Invalid Password";
        passCorrect = false;    
    }
    
});

cPswrd.addEventListener('input', () => {
    if(cPswrd.value !== pswrd.value) {
        cPswrdError.textContent = "Not matched"
        passwordValid = false;
    }
    else {
        cPswrdError.textContent = ""
        passwordValid = true;
    }
});

let b = false;

form.addEventListener("submit", (event) => {
    Array.from(document.querySelectorAll('input')).forEach(elt => {
        if(elt.checkValidity()) {
            elt.parentElement.classList.remove('invalid');
        }
        else {
            elt.parentElement.classList.add('invalid');
            event.preventDefault();
        }
    });

    b = lNameValid && fNameValid && emailValid && phoneValid && passCorrect && passwordValid;
    
    if (!b) {
        event.preventDefault();
    }
    else {
        cover.classList.add('visible');
    }
});
