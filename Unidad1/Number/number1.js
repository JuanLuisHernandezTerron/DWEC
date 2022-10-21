// Crea un programa que pida al usuario un número entero por pantalla y muestre:

// Su valor exponencial.
// El número con 4 decimales.
// El número en binario.
// El número en octal.
// El número en hexadecimal.
// Utiliza para ello los métodos del objeto Number.
// Como datos de muestra, si metes 50, deberías obtener:
// 5e1 / 50.0000 / 00110010 / 62 / 0x32

const prompt=require("prompt-sync")({sigint:true});
var numero = Number(prompt("Dime un numero entero"));

/**
 * @param {Number} Pasaremos a numero el valor que le pedimos al usuario
 * 
 */
console.log("Su valor exponencial es:"+ numero.toExponential()); // Nos mostrará su valor exponencial
console.log("El numero con 4 decimales es:"+ numero.toFixed(4)); // Nos mostrará nuestro numero con 4 decimales 
console.log("El numero en binario es:"+ numero.toString(2)); // Nos sacará nuestro numero en binario
console.log("El numero en octal es:"+ numero.toString(8));// Nos sacará nuestro numero en octal
console.log("El numero en hexadecimal es:"+ numero.toString(16));// Nos sacará nuestro numero en hexadecimal



