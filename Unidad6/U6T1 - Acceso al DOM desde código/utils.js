/*1.El número de párrafos de la página. */
const parrafos = document.getElementsByTagName ("p");
console.log("El texto de la pagina web contiene, "+ parrafos.length + " parrafos")

/*2.El texto del segundo párrafo.*/
const textoParrafo = document.getElementsByTagName("p");
console.log("El texto del segundo parrafo es,"+textoParrafo[1].textContent)

/*3.El número de enlaces de la página.*/
const enlaces = document.getElementsByTagName("a");
console.log("En la pagina wev hay, "+ enlaces.length + " enlaces")

/*4.La dirección del primer enlace.*/
const enlace = document.getElementsByTagName("a");
const primerEnlace = enlace[0];
console.log("La direccion del primer enlace es "+ primerEnlace.getAttribute("href"))

/*5.La dirección del penúltimo enlace.*/
const penúltimo = document.getElementsByTagName("a");
const penultimoEnlace = penúltimo[penúltimo.length-2];
console.log("La direccion del penultimo enlace es "+ penultimoEnlace.getAttribute("href"))

/*6.El número de enlaces que apuntan a /wiki/Municipio*/
const enlacesMunicipio = document.getElementsByTagName("a");
var contadorEnlaces = 0;
var contadorEnlacesAUX = 0;
for (let i = 0; i < enlacesMunicipio.length; i++) {
    const munienla = enlacesMunicipio[i].getAttribute("href");
    const apuntar = munienla.substring(munienla.length-15,munienla.length);
    (apuntar === "/wiki/Municipio") ? contadorEnlaces ++ : console.log("");
    //SE PUEDE UTILIZAR DE DOS MANERAS LA DE ADRRIBA Y LA DE ABAJO
    (munienla.includes("/wiki/Municipio")) ? contadorEnlacesAUX ++ : "";

}
console.log("Hay "+contadorEnlaces +" apuntados")
console.log("Hay "+contadorEnlacesAUX +" apuntados")

/*7. El número de enlaces del primer párrafo.*/

const parrafosGen = document.getElementsByTagName("p");
const fisrtParrafo = parrafos[0];
const a = fisrtParrafo.getElementsByTagName("a");
console.log("Hay "+a.length+ " enlaces en el primer parrafo")
