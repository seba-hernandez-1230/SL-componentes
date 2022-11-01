console.log("Empieza el programa");
"use strict";

let captcha= document.getElementById("codigo");
captcha.innerHTML = Math.floor((Math.random()*1000)+1);
let input= document.getElementById("usuario");
let btn= document.querySelector("#enviar");
btn.addEventListener('click', validar);
let resultado = document.getElementById("advertencia");

console.log(input.value);
console.log(captcha.value);
console.log("Se ejecuta la Funcion");
function validar() {
    input = document.getElementById("usuario").value;
    if (input.value === captcha.value){
        resultado.innerHTML = "el captcha ingresado es correcto";
    } else {
        resultado.innerHTML = "el captcha ingresado es incorrecto";  
    }
}
