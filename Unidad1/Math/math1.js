//Crea un programa que pida al usuario que elija una opción del siguiente menú:
// Potencia.
// Raíz.
// Redondeo.
// Trigonometría.
// Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el resultado en pantalla (La potencia de X elevado a Y es: )
// Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en pantalla (La raíz de X es: )
// Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al entero más próximo, al alta y a la baja.
// Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla los valores trigonométricos del seno, coseno y tangente.

const prompt=require("prompt-sync")({sigint:true});
var opcion = prompt("Elije una opcion: ");

/**
 * @switch En este switch estaremos pidiendo al usuario una opcion, y estará mostrando por terminal el resultado de seleccionar 
 * esa opción
 */

switch (Number(opcion)) {

    case 1:
        var base= prompt("Dime una base");
        var exponente= prompt("Dime un exponente");
            console.log("La potencia de "+base+" elevado a Y es: "+Math.pow(base,exponente)); //calcula la potencia de un numero
        break;
    case 2:
        var numero = prompt("Dime un numero no negativo")
         if (numero > 0)  console.log("La raíz de:"+ numero +" es "+ Math.sqrt(numero)); //calcula la raiz cuadrada
        break;
    case 3:
        var numero = prompt("Dime un numero decimal");
        console.log("El numero redondeado al alta es:"+ Math.ceil(numero)); //Redondea a lo alto
        console.log("El numero redondeado a la baja es:"+ Math.floor(numero)); //redondea a la baja
        console.log("El numero redondeado al entero mas cercano es:"+ Math.round(numero)); //redondea al entero mas cercano
        break;
    case 4:
        var rango = prompt("Dime un angulo");
        console.log("Valor trigonométricos seno es "+Math.sin(rango)) //calcula el valor seno
        console.log("Valor trigonométricos coseno es "+Math.cos(rango)) //calcula el valor coseno
        console.log("Valor trigonométricos seno es "+Math.tan(rango)) //calcula el valor de la tangente
        break;
    default:
        break;
}

