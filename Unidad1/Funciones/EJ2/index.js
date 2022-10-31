/**
 * 
 * @returns Devuelve si es par o no es par
 * @function numeroPar recojo el numero del prompt y devuelvo si es par o no
 * @author Juan Luis Hernandez Terron
 */

var numeroPar = (numero) => (numero % 2 === 0) ? alert("Es par") : alert("No es par");

numeroPar(prompt("Dime un numero para ver si es par o no es par"));

