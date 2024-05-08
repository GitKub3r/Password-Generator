const myButton = document.getElementById("gen-pass-btn") as HTMLButtonElement;
const check1 = document.getElementById("opt1") as HTMLInputElement;
const check2 = document.getElementById("opt2") as HTMLInputElement;
const check3 = document.getElementById("opt3") as HTMLInputElement;

const txtLength = document.getElementById("txt-length") as HTMLInputElement;
const txtPassword = document.getElementById("txt-password") as HTMLInputElement;

const lowerLetters: string = "abcdefghijklmnopqrstuvwxyz";
const upperLetters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums: string = "0123456789";
const special: string = "´-+]-.,?¡¿_|ºª<>";

myButton.addEventListener("click", function(event) {
    let length = parseInt(txtLength.value);

    // Verificar si el valor de longitud es un número válido
    if (isNaN(length) || length <= 0) {
        alert("Por favor, ingrese una longitud válida para la contraseña.");
        return;
    }

    let allowed: string = lowerLetters; // Reinicializamos el conjunto permitido cada vez

    if (check1.checked) {
        allowed += special;
    }

    if (check2.checked) {
        allowed += nums;
    }

    if (check3.checked) {
        allowed += upperLetters;
    }

    const password = generatePassword(length, allowed);
    txtPassword.value = password;
    txtPassword.classList.add("editable");
});

function generatePassword(length: number, allowed: string) {
    let genPassword: string = "";
    let randomNum: number;

    for (let i = 0; i < length; i++) {
        const chosenSetIndex: number = Math.floor(Math.random() * allowed.length);
        const chosenSet: string = allowed[chosenSetIndex];
        randomNum = Math.floor(Math.random() * chosenSet.length);
        genPassword += chosenSet[randomNum];
    }

    return genPassword;
}
