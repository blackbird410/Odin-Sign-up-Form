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

fName.addEventListener('input', () => {
    fNameError.textContent = fName.value.match(reName)? "" : "Input invalid!";
});

lName.addEventListener('input', () => {
    lNameError.textContent = lName.value.match(reName)? "" : "Invalid input";
});

email.addEventListener('input', () => {
    emailError.textContent = email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)? "" : "Invalid email";
});

phone.addEventListener('input', () => {
    phoneError.textContent = phone.value.match(/^([+]\d{1,3})?\d{8,10}$/)? "" : "Invalid number";
});

pswrd.addEventListener('input', () => {
    const p = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z0-9]{8,20}$/
    pswrdError.textContent = pswrd.value.match(p)? "" : "Invalid Password";
    console.log(pswrd.value);
});

let passwordValid = false;
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

    if(!passwordValid) {
        event.preventDefault();
    }
});