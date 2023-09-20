const randomPassword = document.querySelector(".random-password");
const reloadBtn = document.querySelector(".reload-icon");
const passwordStatus = document.querySelector(".password-status");
const rangeInput = document.querySelector("#range");
const passLen = document.querySelector(".pass-len");
 
passLen.textContent = parseInt(rangeInput.value);



function passwordGenerator(range) {
    const letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789!@#$%^&*()/*""?';
    let password = "";
    for (let i = 1; i<=range; i++) {
        const randomNumber = Math.floor(Math.random() * (letters.length));
        password+=letters[randomNumber];
    }

    randomPassword.innerText = password;

}
 
rangeInput.addEventListener("input", (event) => {
    passLen.textContent = parseInt(event.target.value);   
    if (passLen.textContent <=8) {
        passwordStatus.innerText = "Weak";
        passwordStatus.style.color = "red";
    }
    else if(passLen.textContent > 8 && passLen.textContent <=10){
        passwordStatus.innerText = "Good";
        passwordStatus.style.color = "orange";
    }
    else{
        passwordStatus.innerText = "Strong";
        passwordStatus.style.color = "green";
    }
    passwordGenerator(parseInt(event.target.value));

});


reloadBtn.addEventListener("click", () => passwordGenerator(parseInt(rangeInput.value)));

passwordGenerator(parseInt(rangeInput.value));

 
 