// Crea un programa que pida al usuario su nombre y apellidos y muestre:

// El tamaño del nombre más los apellidos (sin contar espacios).
// La cadena en minúsculas y en mayúsculas.
// Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido 2:
// Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para José María García Durán sería jgarciad.
// Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. josgardur.

const prompt=require("prompt-sync")({sigint:true});

var nombre_apellido=prompt("Dime tus nombres y tus apellidos");

console.log("El tamaño del nombre y los apellidos es:"+ sacarTamano(nombre_apellido));
minusculaMayuscula(nombre_apellido);
dividrPalabras(nombre_apellido);
contrasenaPropuesta(nombre_apellido);

/**
 * @function contrasenaPropuesta En esta funcion estaremos guardadno la cadena que recogemos por parametro en un array, y mostraremos
 * por pantalla el resultado de "cojer" datos con el substring.
 */
function contrasenaPropuesta(nombreApellido){
    var arrayNombres = nombreApellido.split(" ");
    var nombre = arrayNombres[0];
    var primerApellido = arrayNombres[1];
    var segundoApellido = arrayNombres[2];
    console.log(nombre.substring(0,1)+primerApellido+segundoApellido.substring(0,1));
    console.log(nombre.substring(0,3)+primerApellido.substring(0,3)+segundoApellido.substring(0,3));
}

/**
 * @function dividrPalabras En esta funcion estaremos guardando en un array la cadena y la estaremos impriendo por pantalla con saltos de linea
 */
function dividrPalabras(nombreApellido) {
    var arrayNombres = nombreApellido.split(" ");
    console.log(arrayNombres[0])
    console.log(arrayNombres[1])
    console.log(arrayNombres[2])
}

/**
 * @function sacarTamano Esta funcion recorremos la cadena para saber su longitud exacta sin contar espacios
 * @returns devolvemos un entero con la longitud de la cadena
 */

function sacarTamano(nombreApellido) {
    var contadorPalabras = 0;
    for (let index = 0; index < nombreApellido.length; index++) {
        if(nombreApellido.charAt(index) !== " "){
            contadorPalabras++;
        }
    }
    return contadorPalabras;
}

/**
 * 
 * @function minusculaMayuscula Estaremos impriendo la cadena tanto en minuscula (LowerCase) y en mayuscula (UpperCase)
 */

function minusculaMayuscula(nombre) {
    var nombreMinuscula = nombre.toLowerCase();
    var nombreMayuscula = nombre.toUpperCase();

    console.log("En minuscula es: "+ nombreMinuscula +" y en mayuscula: "+nombreMayuscula);
}