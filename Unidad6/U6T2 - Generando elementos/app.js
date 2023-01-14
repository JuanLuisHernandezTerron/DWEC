const lista = document.createElement("ul");
const elementoLista = document.createElement("li");
const boton = document.getElementById("boton");
const botonFirstLi = document.getElementById("borrarFirstLI");
const botonLastLi = document.getElementById("borrarLastLI");
var textoBoton = "";

lista.appendChild(elementoLista);
document.body.appendChild(lista);

boton.addEventListener("click",() => {
    textoBoton = prompt("Dime un texo para meterlo en la lista");
    anadirLista(textoBoton,lista)
},false);

/**
 * 
 * @param {string} texto contiene el valor del prompt 
 * @param {ul} lista contiene la lista donde vamos a añadir el nodo li
 */
function anadirLista(texto,lista) {
    const textoli = document.createElement("li");
    textoli.textContent = texto;
    lista.appendChild(textoli);
}

/**
 * Cuando haga un evento el boton, elimina el primer hijo (li)
 */
botonFirstLi.addEventListener("click",()=>{
    (lista.hasChildNodes()) ? lista.removeChild(lista.firstChild) : console.log("No hay nodos en la lista para borrar");
})
/**
 * Cuando haga un evento el boton, elimina el ultimo hijo (li)
 */
botonLastLi.addEventListener("click",()=>{
    (lista.hasChildNodes()) ? lista.removeChild(lista.lastChild) : console.log("No hay nodos en la lista para borrar");
})

