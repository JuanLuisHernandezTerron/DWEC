analizadorFrase(prompt("Dime una frase, para analizarla"),Number(prompt("Cada cuando quieres que cambiemos la letra")))

/**
 * 
 * @param {*} frase Guardamos la frase que ha decidido el usuario que quiere analizar
 * @param {*} posiciones Guardamos cada cuantas posiciones quiere que cambiemos el tamaño de la letra si minuscula o mayuscula
 * @function sacarCodigoAscii Esta funcion devuelve el numero de ascii de la letra dependiendo de si es mayuscula o minuscula
 * @function analizadorFrase Recorremos la frase, cuando el contadorLetras tenga el valor de la posicion que el usuario ha introducido que quiere cambiar el tamaño de la letra, entonces llamaremos a la funcion sacarCodigoAscii() y dependiendo del rango del  numero ascii
 *                           pues, pondremos que se ponga esa letra en minuscula o mayuscula, y si no es entra en ninguno de los 2 rangos, signigica que es un numero o un simbolo, todo esto lo irémos guardando en una frase auxiliar
 * @author Juan Luis Hernandez Terron
 */
function analizadorFrase(frase,posiciones) {
    var fraseAUx = "";
    var contadorLetras = 0;
    for (let i = 0; i < frase.length; i++) {
        if (contadorLetras === posiciones) {
                if (sacarCodigoAscii(frase.charAt(i)) >= 65 && sacarCodigoAscii(frase.charAt(i)) <= 90) {
                    fraseAUx += frase.charAt(i).toLowerCase();
                }else if(sacarCodigoAscii(frase.charAt(i)) >= 97 && sacarCodigoAscii(frase.charAt(i)) <= 122){
                    fraseAUx += frase.charAt(i).toUpperCase();
                }else{
                    fraseAUx += frase.charAt(i);
                }
            contadorLetras = 1;
        }else{
            fraseAUx += frase.charAt(i);
            contadorLetras ++;
        }
    }
    alert("Tu frase al ser analizada ha quedado así : "+ fraseAUx)
}

function sacarCodigoAscii(letra) {
    return letra.charCodeAt();
}
