//variables
const phoneInput = document.getElementById('number');
const password = document.getElementById("password");
const enterBtn = document.getElementById('enter');


//listeners

eventListiners();

function eventListiners() {
    phoneInput.addEventListener("focus", changeBackground);
    password.addEventListener("focus", changeBackground);
    phoneInput.addEventListener("blur", returnBackground);
    password.addEventListener("blur", returnBackground);
    document.addEventListener('DOMContentLoaded', disabledBtn);
    enterBtn.addEventListener('submit', sendData);
}


//functions

function checkFields() {
    let phoneInputValue = phoneInput.value;
    let passwordValue = password.value.length;
    if (phoneInputValue === '' || passwordValue < 5 || phoneInputValue.length < 18) {
        enterBtn.disabled = true;
        enterBtn.style.opacity = "0.3";
        enterBtn.style.pointerEvents = "none"
    } else {
        enterBtn.disabled = false;
        enterBtn.style.opacity = "1";
        enterBtn.style.pointerEvents = "auto"
    }
}

function disabledBtn() {
    enterBtn.disabled = true;
}

function changeBackground(event) {
    let target = event.target;
    target.style.background = "white";
    target.style.color = "black";
}

function returnBackground(event) {
    let target = event.target;
    target.style.background = "inherit";
    target.style.color = "white";
    checkFields()
}


phoneInput.addEventListener('keydown', function (event) {
    if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
        event.preventDefault()
    }
    var mask = '+7 (111) 111-11-11';

    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        var currentString = phoneInput.value;
        var currentLength = currentString.length;
        if (/[0-9]/.test(event.key)) {
            if (mask[currentLength] === '1') {
                this.value = currentString + event.key;
            } else {
                for (var i = currentLength; i < mask.length; i++) {
                    if (mask[i] === '1') {
                        this.value = currentString + event.key;
                        break;
                    }
                    currentString += mask[i];
                }
            }
        }
    }
});

function sendData() {
    var formData = new FormData(document.forms.auth);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/url");
    xhr.send(formData);
}


