// Crea un programa que pida al usuario una propuesta de contraseña y  compruebe si cumple con los siguientes requisitos.

// Tiene entre 8 y 16 caracteres.
// Tiene una letra mayúscula.
// Tiene una letra minúscula.
// Tiene un número.
// Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.
// Si cumple con todos los requisitos se considera una contraseña segura, de lo  contrario mostrará que es una contraseña no segura.

const prompt=require("prompt-sync")({sigint:true});
var contrasena = prompt("Dime la contraseña");

var longitudCadena = contrasena.length;
var longitudOK = new Boolean(true);

if (longitudCadena >= 8 && longitudCadena <= 16) {
    console.log("Longitud Correcta")
}else{
    longitudOK = false;
}
/**
 * @if Si es todo true mostrará por consola que es una contraseña valida, si no, mostrará que no es valida
 */

if(longitudOK && validaLetraChica(contrasena) && validaLetraGrande(contrasena) && validarSigno(contrasena)){
    console.log("Valida");
}else{
    console.log("No valida");
}

/**
 * @Array El arraySignos contiene todos los signos posibles que pueden aparecer en la contraseña
 * @for El for anidado recorremos letra a letra la contraseña y a la vez con el segundo for recorremos el arraySignos.
 * @returns devolvemos true si aparece 1 vez en la cadena
 */

function validarSigno(cadena) {
    debugger
    var arraySignos = ["-","_","@","#","$","%","&"];
    var contadorSigno = 0; 

    for (let i = 0; i < cadena.length; i++) {
        for (let j = 0; j < arraySignos.length; j++) {
            if (cadena.charAt(i) === arraySignos[j]) {
                contadorSigno ++;
            }
        }
    }

    if(contadorSigno === 1){
        return true;
    }
}

/**
 * @Array El arrayABCGrande contiene el abecedario en mayuscula, que recorreremos posteriormente.
 * @for El for anidado recorremos letra a letra la contraseña y a la vez con el segundo for recorremos el arrayABCGrande.
 * @returns devolvemos true si aparece 1 vez en la cadena
 */

function validaLetraGrande(cadena) {
    debugger
    var arrayABCGrande = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var contadorMayus = 0; 

    for (let i = 0; i < cadena.length; i++) {
        for (let j = 0; j < arrayABCGrande.length; j++) {
            if (cadena.charAt(i) === arrayABCGrande[j]) {
                contadorMayus ++;
            }
        }
    }

    if(contadorMayus === 1){
        return true;
    }

}

/**
 * @Array El arrayabcPequeno contiene el abecedario en minuscula, que recorreremos posteriormente.
 * @for El for anidado recorremos letra a letra la contraseña y a la vez con el segundo for recorremos el arrayabcPequeno.
 * @returns devolvemos true si aparece 1 vez en la cadena
 */

function validaLetraChica(cadena) {
    debugger
    var arrayabcPequeno = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var contadorMinus = 0; 

    for (let i = 0; i < cadena.length; i++) {
        for (let j = 0; j < arrayabcPequeno.length; j++) {
            if (cadena.charAt(i) === arrayabcPequeno[j]) {
                contadorMinus ++;
            }
        }
    }

    if(contadorMinus === 1){
        return true;
    }
}
