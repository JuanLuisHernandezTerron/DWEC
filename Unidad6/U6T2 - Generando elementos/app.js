const lista = document.createElement("ul");
const elementoLista = document.createElement("li");
const boton = document.getElementById("boton");
var textoBoton = "";

lista.appendChild(elementoLista);
document.body.appendChild(lista);

boton.addEventListener("click",() => {
    textoBoton = prompt("Dime un texo para meterlo en la lista");
    anadirLista(textoBoton,lista)
},false);

function anadirLista(texto,lista) {
    const textoli = document.createElement("li");
    textoli.textContent = texto;
    lista.appendChild(textoli);
}