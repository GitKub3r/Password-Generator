// Seleccionar elementos del DOM
var myButton = document.getElementById("gen-pass-btn");  // Botón para generar contraseña
var check1 = document.getElementById("opt1");  // Checkbox para caracteres especiales
var check2 = document.getElementById("opt2");  // Checkbox para números
var check3 = document.getElementById("opt3");  // Checkbox para letras mayúsculas
var txtLength = document.getElementById("txt-length");  // Input para longitud de la contraseña
var txtPassword = document.getElementById("txt-password");  // Campo de texto para mostrar la contraseña generada
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";  // Letras minúsculas
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  // Letras mayúsculas
var nums = "0123456789";  // Números
var special = "-+]-?¡¿_|ºª<>";  // Caracteres especiales
var errorLabel = document.getElementById("error-no-lenght");  // Etiqueta de error para longitud no válida

txtLength.value = 20;

// Evento clic en el botón para generar contraseña
myButton.addEventListener("click", function(event) {
    errorLabel.classList.remove("error");  // Remover clase de error si está presente
    var length = parseInt(txtLength.value);  // Obtener la longitud de la contraseña
    // Verificar si el valor de longitud es un número válido
    if (isNaN(length) || length <= 0) {
        errorLabel.classList.add("error");  // Agregar clase de error si la longitud no es válida
        txtPassword.value = "";  // Limpiar campo de contraseña
    } else {
        var allowed = lowerLetters; // Inicializar el conjunto permitido con letras minúsculas
        if (check1.checked) {
            allowed += special;  // Agregar caracteres especiales al conjunto permitido si está seleccionado
        }
        if (check2.checked) {
            allowed += nums;  // Agregar números al conjunto permitido si está seleccionado
        }
        if (check3.checked) {
            allowed += upperLetters;  // Agregar letras mayúsculas al conjunto permitido si está seleccionado
        }
        var password = generatePassword(length, allowed);  // Generar contraseña
        txtPassword.value = password;  // Mostrar contraseña generada en el campo de texto
        txtPassword.classList.add("editable");  // Agregar clase para permitir edición del campo de contraseña
        txtPassword.classList.remove("readonly");  // Quitar clase de solo lectura del campo de contraseña
    }
});

// Función para generar una contraseña aleatoria
function generatePassword(length, allowed) {
    var genPassword = "";  // Inicializar la contraseña generada
    var randomNum;
    // Generar cada carácter de la contraseña
    for (var i = 0; i < length; i++) {
        var chosenSetIndex = Math.floor(Math.random() * allowed.length);
        var chosenSet = allowed[chosenSetIndex];
        randomNum = Math.floor(Math.random() * chosenSet.length);
        genPassword += chosenSet[randomNum];
    }
    return genPassword;  // Devolver la contraseña generada
}

// Evento de entrada en el campo de contraseña
txtPassword.addEventListener("input", function() {
    // Verificar si el campo de contraseña está vacío
    if (txtPassword.value.trim() === '') {
        txtPassword.classList.add('empty');  // Agregar clase de campo vacío
        txtPassword.setAttribute('readonly', '');  // Establecer como solo lectura
    } else {
        txtPassword.classList.remove('empty');  // Quitar clase de campo vacío
        txtPassword.removeAttribute('readonly');  // Quitar atributo de solo lectura
    }
});
